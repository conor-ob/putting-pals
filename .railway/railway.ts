/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: todo */
import {
  type BuildConfig,
  type DeployConfig,
  defineRailway,
  github,
  group,
  postgres,
  project,
  type ReferencableServiceNode,
  service,
  volume,
} from "railway/iac";

function privateNetworkingUrl(target: ReferencableServiceNode) {
  return `http://\${{${target.name}.RAILWAY_PRIVATE_DOMAIN}}:\${{${target.name}.PORT}}`;
}

function dockerBuildConfig({
  dockerfilePath,
  watchPatterns,
}: {
  dockerfilePath: string;
  watchPatterns?: string[];
}): Partial<BuildConfig> {
  return {
    buildEnvironment: "V3",
    builder: "DOCKERFILE",
    dockerfilePath,
    watchPatterns,
  };
}

export default defineRailway((ctx) => {
  const isProd = ctx.isEnvironment("production");

  const puttingPals = github("conor-ob/putting-pals", {
    checkSuites: false,
  });

  const postgresVolume = volume("postgres-volume", {
    allowOnlineResize: true,
    region: "europe-west4-drams3a",
    sizeMB: 5_000,
  });

  const postgresDatabase = postgres("postgres", {
    region: "europe-west4-drams3a",
  });

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
      PORT: "8080",
    },
    build: dockerBuildConfig({
      dockerfilePath: "apps/web/Dockerfile",
    }),
    deploy: {
      ...deployConfig,
    },
  });

  const expo = service("expo", {
    source: puttingPals,
    env: {
      PORT: "8080",
    },
    build: dockerBuildConfig({
      dockerfilePath: "apps/expo/Dockerfile",
    }),
    deploy: {
      ...deployConfig,
      healthcheckPath: "/",
    },
  });

  const server = service("server", {
    source: puttingPals,
    env: {
      PORT: "8080",
      ORIGIN:
        "https://puttingpals.up.railway.app,https://puttingpals-web.up.railway.app",
      DATABASE_URL: "${{postgres.DATABASE_URL}}",
    },
    build: dockerBuildConfig({
      dockerfilePath: "apps/server/Dockerfile",
    }),
    deploy: {
      ...deployConfig,
      healthcheckPath: "/health",
    },
  });

  const proxy = service("proxy", {
    source: puttingPals,
    env: {
      EXPO_DOMAIN: "puttingpals.up.railway.app",
      EXPO_URL: privateNetworkingUrl(expo),
      WEB_DOMAIN: "puttingpals-web.up.railway.app",
      WEB_URL: privateNetworkingUrl(web),
      SERVER_URL: privateNetworkingUrl(server),
    },
    build: dockerBuildConfig({
      dockerfilePath: "apps/proxy/Dockerfile",
    }),
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
    build: dockerBuildConfig({
      dockerfilePath: "packages/putting-pals-db/Dockerfile",
      watchPatterns: ["packages/putting-pals-db/**"],
    }),
    deploy: {
      multiRegionConfig: euWest4,
      restartPolicyType: "NEVER",
    },
  });

  const espnSchema = service("espn-schema", {
    source: puttingPals,
    env: {
      SERVER_URL: privateNetworkingUrl(server),
    },
    build: dockerBuildConfig({
      dockerfilePath: "jobs/espn-schema/Dockerfile",
    }),
    deploy: {
      cronSchedule: isProd ? "*/5 * * * *" : "0 0 * * *",
      restartPolicyType: "NEVER",
    },
  });
  const leaderboardSync = service("leaderboard-sync", {
    source: puttingPals,
    env: {
      SERVER_URL: privateNetworkingUrl(server),
    },
    build: dockerBuildConfig({
      dockerfilePath: "jobs/leaderboard-sync/Dockerfile",
    }),
    deploy: {
      cronSchedule: isProd ? "*/5 * * * *" : "0 0 * * *",
      restartPolicyType: "NEVER",
    },
  });

  const jobs = group("jobs", [dbMigrate, espnSchema, leaderboardSync]);
  const gateway = group("gateway", [proxy]);
  const database = group("database", [postgresDatabase, postgresVolume]);
  const backend = group("backend", [server]);
  const frontend = group("frontend", [web, expo]);

  return project("putting-pals", {
    resources: [jobs, gateway, database, backend, frontend],
  });
});
