# Alpine image
FROM node:alpine AS alpine
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
RUN turbo prune --scope=@app/web --docker

# Build the project
FROM base AS builder
# TODO needs to be hardcoded in cache key
# ARG RAILWAY_SERVICE_ID
ARG PORT
ARG SENTRY_DSN
ARG GITHUB_SHA
ARG RAILWAY_GIT_COMMIT_SHA

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
# RUN --mount=type=cache,id=s/${RAILWAY_SERVICE_ID}-/root/local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm install --frozen-lockfile
RUN pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=@app/web
# RUN --mount=type=cache,id=s/${RAILWAY_SERVICE_ID}-/root/local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm prune --prod --no-optional
RUN pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM caddy:alpine AS runner

WORKDIR /app

# Copy built assets from build stage
COPY --from=builder /app/apps/web/dist /srv
COPY apps/web/Caddyfile /etc/caddy/Caddyfile

RUN caddy fmt --overwrite /etc/caddy/Caddyfile
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile", "2>&1"]
