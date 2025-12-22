# https://fintlabs.medium.com/optimized-multi-stage-docker-builds-with-turborepo-and-pnpm-for-nodejs-microservices-in-a-monorepo-c686fdcf051f

# Optimized Dockerfile for running database migrations
# Uses turbo prune to isolate dependencies, but keeps dev dependencies needed for drizzle-kit

# Alpine base image
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install pnpm turbo --global
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune projects to isolate only what's needed
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@putting-pals/putting-pals-db --docker

# Install dependencies (including dev dependencies needed for drizzle-kit)
FROM base AS deps
WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install all dependencies (including dev dependencies like drizzle-kit, tsx, typescript)
# https://docs.railway.com/guides/dockerfiles#cache-mounts
RUN --mount=type=cache,id=s/1fe9194c-b1e4-422b-955b-b0abd7cf6ecf-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 \
    pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
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
