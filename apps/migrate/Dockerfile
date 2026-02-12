# https://fintlabs.medium.com/optimized-multi-stage-docker-builds-with-turborepo-and-pnpm-for-nodejs-microservices-in-a-monorepo-c686fdcf051f

# Optimized Dockerfile for running database migrations
# Uses turbo prune to isolate dependencies, but keeps dev dependencies needed for drizzle-kit

# Base Alpine image
FROM node:22-alpine AS alpine
RUN apk add --no-cache libc6-compat

# Setup pnpm and turbo
FROM alpine AS base
RUN npm install -g pnpm turbo
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune projects to isolate subworkspace
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@putting-pals/putting-pals-db --docker

# Install dependencies (including dev dependencies needed for drizzle-kit)
FROM base AS deps
WORKDIR /app

# Copy only lockfiles and pruned workspace manifests first
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install all dependencies (including dev dependencies like drizzle-kit, tsx, typescript)
RUN pnpm install --frozen-lockfile

# Copy full source for the isolated workspace
COPY --from=pruner /app/out/full/ .

# Final image
FROM base AS runner

WORKDIR /app
COPY --from=deps /app .
WORKDIR /app/packages/putting-pals-db

ARG DATABASE_URL
ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}

CMD ["pnpm", "db:migrate"]
