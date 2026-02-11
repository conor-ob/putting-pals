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
RUN turbo prune --scope=@putting-pals/cron --docker

# Build the project
FROM base AS builder

ARG SERVER_URL

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
# https://docs.railway.com/guides/dockerfiles#cache-mounts
RUN --mount=type=cache,id=s/dd6e32de-bd23-4ef2-8cf0-cce0137bfec8-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo build --filter=@putting-pals/cron
RUN --mount=type=cache,id=s/dd6e32de-bd23-4ef2-8cf0-cce0137bfec8-/root/.local/share/pnpm/store/v3,target=/root/.local/share/pnpm/store/v3 pnpm prune --prod --no-optional
RUN rm -rf ./**/*/src

# Final image
FROM alpine AS runner

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app .
WORKDIR /app/apps/cron

ARG SERVER_URL

ENV NODE_ENV=production
ENV SERVER_URL=${SERVER_URL}

CMD ["node", "dist/index.js"]
