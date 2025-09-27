# https://fintlabs.medium.com/optimized-multi-stage-docker-builds-with-turborepo-and-pnpm-for-nodejs-microservices-in-a-monorepo-c686fdcf051f

# Alpine image
FROM node:22-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat

# Setup pnpm and turbo on the alpine base
FROM alpine as base
RUN npm install pnpm turbo --global
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune projects
FROM base AS pruner

WORKDIR /app
COPY . .
RUN turbo prune --scope=@app/app --docker

# Build the project
FROM base AS builder

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
# https://docs.railway.com/guides/dockerfiles#cache-mounts
RUN --mount=type=cache,id=s/4c760833-e6b9-4048-9695-09780bab1fb6-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=@app/app
RUN --mount=type=cache,id=s/4c760833-e6b9-4048-9695-09780bab1fb6-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM caddy:alpine AS runner

WORKDIR /app

# Copy built assets from build stage
COPY --from=builder /app/apps/app/dist /srv
COPY apps/app/Caddyfile /etc/caddy/Caddyfile

RUN caddy fmt --overwrite /etc/caddy/Caddyfile
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile", "2>&1"]
