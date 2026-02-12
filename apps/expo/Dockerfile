# https://fintlabs.medium.com/optimized-multi-stage-docker-builds-with-turborepo-and-pnpm-for-nodejs-microservices-in-a-monorepo-c686fdcf051f

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
RUN turbo prune --scope=@putting-pals/expo --docker

# Build stage
FROM base AS builder

WORKDIR /app

# Copy only lockfiles and pruned workspace manifests first
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install dependencies (layer cached by Docker if lockfile unchanged)
RUN pnpm install --frozen-lockfile

# Copy full source for the isolated workspace
COPY --from=pruner /app/out/full/ .

ARG EXPO_PUBLIC_SERVER_URL
ENV EXPO_PUBLIC_SERVER_URL=$EXPO_PUBLIC_SERVER_URL

# Turbo codegen and build
RUN turbo build --filter=@putting-pals/expo

# Prune production dependencies
RUN pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM caddy:latest AS runner

WORKDIR /app

# Copy built assets from build stage
COPY --from=builder /app/apps/expo/dist /srv
COPY apps/expo/Caddyfile /etc/caddy/Caddyfile

RUN caddy fmt --overwrite /etc/caddy/Caddyfile
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile", "2>&1"]
