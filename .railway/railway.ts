/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: todo */
import {
  type BuildConfig,
  type DeployConfig,
  defineRailway,
  github,
  group,
  image,
  postgres,
  project,
  type ReferencableServiceNode,
  service,
  volume,
} from "railway/iac";

const privateUrl = (target: ReferencableServiceNode) =>
  `http://\${{${target.name}.RAILWAY_PRIVATE_DOMAIN}}:\${{${target.name}.PORT}}`;

export default defineRailway((ctx) => {
  const isProd = ctx.isEnvironment("production");

  const puttingPals = github("conor-ob/putting-pals", {
    checkSuites: false,
    branch: "chore/arch-refactor",
  });

  const postgresVolume = volume("postgres-volume", {
    allowOnlineResize: true,
    region: "europe-west4-drams3a",
    sizeMB: 5_000,
  });

  const postgresDatabase = postgres("postgres", {
    region: "europe-west4-drams3a",
  });

  const drizzleVolume = volume("drizzle-volume", {
    allowOnlineResize: true,
    region: "europe-west4-drams3a",
    sizeMB: 5000,
  });

  const drizzle = service("drizzle", {
    source: image("ghcr.io/drizzle-team/gateway:latest"),
    healthcheck: "/health",
    replicas: { "europe-west4-drams3a": 1 },
    deploy: {
      limitOverride: { containers: { cpu: 1, memoryBytes: 1000000000 } },
    },
    volumeMounts: { "/app": drizzleVolume },
    env: {
      DATABASE_URL: "${{postgres.DATABASE_URL}}",
    },
  });

  const buildConfig: Partial<BuildConfig> = {
    buildEnvironment: "V3",
    builder: "DOCKERFILE",
  };

  const euWest4 = { "europe-west4-drams3a": { numReplicas: 1 } };
  const deployConfig: Partial<DeployConfig> = {
    multiRegionConfig: euWest4,
    // restartPolicyType: "ON_FAILURE",
    // restartPolicyMaxRetries: 5,
    limitOverride: {
      containers: {
        cpu: 1,
        memoryBytes: 1_000_000_000,
      },
    },
    // healthcheckPath: "/api/health",
    // healthcheckTimeout: 300,
    sleepApplication: !isProd,
  };

  const web = service("web", {
    source: puttingPals,
    env: {
      // PORT: preserve(),
      PORT: "8080",
    },
    build: {
      ...buildConfig,
      dockerfilePath: "apps/web/Dockerfile",
    },
    deploy: {
      ...deployConfig,
    },
  });

  const expo = service("expo", {
    source: puttingPals,
    env: {
      // PORT: preserve(),
      PORT: "8080",
    },
    build: {
      ...buildConfig,
      dockerfilePath: "apps/expo/Dockerfile",
    },
    deploy: {
      ...deployConfig,
      healthcheckPath: "/",
    },
  });

  const server = service("server", {
    source: puttingPals,
    env: {
      // PORT: preserve(),
      PORT: "8080",
      // ORIGIN: preserve(),
      ORIGIN:
        "https://puttingpals-expo.up.railway.app,https://puttingpals-web.up.railway.app",
      DATABASE_URL: "${{postgres.DATABASE_URL}}",
    },
    build: {
      ...buildConfig,
      dockerfilePath: "apps/server/Dockerfile",
    },
    deploy: {
      ...deployConfig,
      healthcheckPath: "/health",
    },
  });

  const proxy = service("proxy", {
    source: puttingPals,
    env: {
      // EXPO_DOMAIN: preserve(),
      EXPO_DOMAIN: "puttingpals-expo.up.railway.app",
      // WEB_DOMAIN: preserve(),
      WEB_DOMAIN: "puttingpals-web.up.railway.app",
      // WEB_DOMAIN: preserve(),
      EXPO_URL: privateUrl(expo),
      WEB_URL: privateUrl(web),
      SERVER_URL: privateUrl(server),
    },
    build: {
      ...buildConfig,
      dockerfilePath: "apps/proxy/Dockerfile",
    },
    deploy: {
      ...deployConfig,
      healthcheckPath: "/api/health",
    },
  });

  const dbMigrate = service("db-migrate", {
    source: puttingPals,
    env: {
      DATABASE_URL: "${{postgres.DATABASE_URL}}",
    },
    build: {
      ...buildConfig,
      dockerfilePath: "jobs/db-migrate/Dockerfile",
    },
    deploy: {
      ...deployConfig,
    },
  });

  const espnSchema = service("espn-schema", {
    source: puttingPals,
    env: {
      SERVER_URL: privateUrl(server),
    },
    build: {
      ...buildConfig,
      dockerfilePath: "jobs/espn-schema/Dockerfile",
    },
    deploy: {
      cronSchedule: isProd ? "*/5 * * * *" : "0 0 * * *",
    },
  });
  const leaderboardSync = service("leaderboard-sync", {
    source: puttingPals,
    env: {
      SERVER_URL: privateUrl(server),
    },
    build: {
      ...buildConfig,
      dockerfilePath: "jobs/leaderboard-sync/Dockerfile",
    },
    deploy: {
      cronSchedule: isProd ? "*/5 * * * *" : "0 0 * * *",
    },
  });

  const jobs = group("jobs", [dbMigrate, espnSchema, leaderboardSync]);
  const gateway = group("gateway", [proxy]);
  const database = group("database", [
    postgresDatabase,
    postgresVolume,
    drizzle,
    drizzleVolume,
  ]);
  const backend = group("backend", [server]);
  const frontend = group("frontend", [web, expo]);

  return project("putting-pals", {
    resources: [jobs, gateway, database, backend, frontend],
  });
});
