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
RUN turbo prune --scope=@app/server --docker

# Build the project
FROM base AS builder

ARG PORT
ARG ORIGIN
ARG PGA_TOUR_API_KEY
ARG RAILWAY_SERVICE_ID

ARG TARGET_PATH="/root/local/share/pnpm/store/v3"
ARG CACHE_ID="s/${RAILWAY_SERVICE_ID}-${TARGET_PATH}}"

RUN echo "PORT: $PORT" && \
    echo "ORIGIN: $ORIGIN" && \
    echo "PGA_TOUR_API_KEY: $PGA_TOUR_API_KEY" && \
    echo "RAILWAY_SERVICE_ID: $RAILWAY_SERVICE_ID" && \
    echo "TARGET_PATH: $TARGET_PATH" && \
    echo "CACHE_ID: $CACHE_ID"

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
RUN --mount=type=cache,id=${CACHE_ID},target=${TARGET_PATH} pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=@app/server
RUN pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM alpine AS runner
ARG PROJECT

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app .
WORKDIR /app/apps/server

ARG NODE_ENV
ARG PORT
ENV PORT=${PORT}
ENV NODE_ENV=production
EXPOSE ${PORT}

CMD ["node", "dist/index.js"]
