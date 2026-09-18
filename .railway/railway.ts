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

const privateUrl = (target: ReferencableServiceNode) =>
  `http://\${{${target.name}.RAILWAY_PRIVATE_DOMAIN}}:\${{${target.name}.PORT}}`;

export default defineRailway(() => {
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

  // postgresDatabase.networking = {
  //   privateNetworkEndpoint: "postgres-abf4ae3d",
  //   tcpProxies: { "5432": {} },
  // };
  // const drizzleVolume = volume("drizzle-volume", {
  //   alerts: { usage: { "100": {}, "80": {}, "95": {} } },
  //   allowOnlineResize: true,
  //   region: "europe-west4-drams3a",
  //   sizeMB: 5000,
  // });

  // const drizzle = service("drizzle", {
  //   source: image("ghcr.io/drizzle-team/gateway:latest"),
  //   healthcheck: "/health",
  //   replicas: { "europe-west4-drams3a": 1 },
  //   deploy: {
  //     limitOverride: { containers: { cpu: 1, memoryBytes: 1000000000 } },
  //   },
  //   volumeMounts: { "/app": drizzleVolume },
  //   env: { DATABASE_URL: preserve(), MASTERPASS: preserve() },
  // });
  // const expo = service("expo", {
  //   source: puttingPals,
  //   replicas: { "europe-west4-drams3a": 1 },
  //   env: { EXPO_PUBLIC_SERVER_URL: preserve(), PORT: preserve() },
  // });
  // const web = service("web", {
  //   source: puttingPals,
  //   replicas: { "europe-west4-drams3a": 1 },
  //   build: { builder: "DOCKERFILE", dockerfilePath: "apps/web/Dockerfile" },
  // });
  // const server = service("server", {
  //   source: puttingPals,
  //   replicas: { "europe-west4-drams3a": 1 },
  //   env: { DATABASE_URL: preserve(), ORIGIN: preserve(), PORT: preserve() },
  // });

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
    // sleepApplication: false,
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

  // const espnSchema = service("espn-schema", {
  //   source: puttingPals,
  //   replicas: { "europe-west4-drams3a": 1 },
  //   env: { SERVER_URL: preserve() },
  // });
  // const leaderboardSync = service("leaderboard-sync", {
  //   source: puttingPals,
  //   replicas: { "europe-west4-drams3a": 1 },
  //   networking: { privateNetworkEndpoint: "putting-pals" },
  //   env: { SERVER_URL: preserve() },
  // });

  const jobs = group("jobs", [dbMigrate]);
  const gateway = group("gateway", [proxy]);
  const database = group("database", [postgresDatabase]);
  const backend = group("backend", [server]);
  const frontend = group("frontend", [web, expo]);

  return project("putting-pals", {
    resources: [
      // drizzleVolume,
      jobs,
      gateway,
      database,
      backend,
      frontend,
      postgresVolume,
    ],
  });
});
