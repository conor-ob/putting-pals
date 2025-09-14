# -------------------------
# Base Alpine image
# -------------------------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm turbo
RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# -------------------------
# Prune unused workspaces
# -------------------------
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@app/server --docker

# -------------------------
# Build the project
# -------------------------
FROM base AS builder
WORKDIR /app

ARG PORT
ARG ORIGIN
ARG PGA_TOUR_API_KEY
ARG RAILWAY_SERVICE_ID

RUN echo "PORT: $PORT" && \
    echo "ORIGIN: $ORIGIN" && \
    echo "PGA_TOUR_API_KEY: $PGA_TOUR_API_KEY" \
    echo "RAILWAY_SERVICE_ID: $RAILWAY_SERVICE_ID"

# Copy pruned lockfiles and manifests
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install dependencies (cached if possible)
RUN --mount=type=cache,id=s/9f7fc579-219b-497f-aa57-18d68a0327ba-/root/.local/share/pnpm/store,target=/root/.local/share/pnpm/store \
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
