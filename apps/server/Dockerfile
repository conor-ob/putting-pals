# Base Alpine image with system compat
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm turbo
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune step: figure out only what we need for @app/server
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@app/server --docker

# Build step
FROM base AS builder
WORKDIR /app

# Copy pruned workspace manifest files
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install deps with caching
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store/v3 \
    pnpm install --frozen-lockfile

# Copy actual source
COPY --from=pruner /app/out/full/ .

# Build only the server
RUN turbo build --filter=@app/server

# Prune to prod dependencies only
RUN pnpm prune --prod --no-optional

# Final runtime image
FROM node:22-alpine AS runner

# Create app user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app

# Copy built server + packages + node_modules
COPY --from=builder --chown=nodejs:nodejs /app/apps/server ./apps/server
COPY --from=builder --chown=nodejs:nodejs /app/packages ./packages
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

WORKDIR /app/apps/server

# Environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/index.js"]
