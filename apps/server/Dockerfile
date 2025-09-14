# -------------------------
# Base Alpine image
# -------------------------
FROM node:22-alpine AS alpine
RUN apk add --no-cache libc6-compat

# -------------------------
# Base with pnpm & turbo
# -------------------------
FROM alpine AS base
# Enable corepack and pin pnpm + install turbo
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
RUN pnpm add -g turbo
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

WORKDIR /app

# -------------------------
# Prune unused workspaces
# -------------------------
FROM base AS pruner
COPY . .
RUN turbo prune --scope=@app/server --docker

# -------------------------
# Build the project
# -------------------------
  FROM base AS builder
  WORKDIR /app

# Copy pruned lockfiles and manifests
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install dependencies (cached if possible)
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Copy full source
COPY --from=pruner /app/out/full/ .

# Build only @app/server
RUN turbo build --filter=@app/server

# Prune dev deps, optional deps, sources
RUN pnpm prune --prod --no-optional && \
    rm -rf ./**/*/src && \
    pnpm store prune

# -------------------------
# Final runtime image
# -------------------------
FROM alpine AS runner

# Use official node user from base image (uid=1000)
USER node
WORKDIR /app/apps/server

# Copy built server + packages + node_modules
COPY --from=builder --chown=nodejs:nodejs /app/apps/server ./apps/server
COPY --from=builder --chown=nodejs:nodejs /app/packages ./packages
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

# Runtime environment
ENV NODE_ENV=production
ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", "dist/index.js"]
