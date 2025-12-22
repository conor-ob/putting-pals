# https://fintlabs.medium.com/optimized-multi-stage-docker-builds-with-turborepo-and-pnpm-for-nodejs-microservices-in-a-monorepo-c686fdcf051f

# Alpine image
FROM node:22-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat

# Setup pnpm and turbo on the alpine base
FROM alpine AS base
RUN npm install pnpm turbo --global
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune projects
FROM base AS pruner

WORKDIR /app
COPY . .
RUN turbo prune --scope=@putting-pals/putting-pals-db --docker

# Prepare the project
FROM base AS builder

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
# https://docs.railway.com/guides/dockerfiles#cache-mounts
RUN --mount=type=cache,id=s/1fe9194c-b1e4-422b-955b-b0abd7cf6ecf-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN --mount=type=cache,id=s/1fe9194c-b1e4-422b-955b-b0abd7cf6ecf-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm prune --prod --no-optional
# Install drizzle-kit as it's needed for migrations (even though it's a dev dependency)
# Use install with filter to respect the lockfile
RUN --mount=type=cache,id=s/1fe9194c-b1e4-422b-955b-b0abd7cf6ecf-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm install --filter=@putting-pals/putting-pals-db --frozen-lockfile

# Final image
FROM builder AS runner

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app .
WORKDIR /app/packages/putting-pals-db

ARG DATABASE_URL

ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}

CMD ["drizzle-kit", "migrate"]
