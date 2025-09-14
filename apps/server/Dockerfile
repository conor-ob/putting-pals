# Alpine base image with pnpm and turbo
FROM node:22-alpine AS base

# Install system dependencies and pnpm/turbo
RUN apk update && apk add --no-cache libc6-compat && \
    npm install -g pnpm@9.14.3 turbo && \
    pnpm config set store-dir /root/.local/share/pnpm/store/v3

# Prune projects stage
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@app/server --docker

# Build stage
FROM base AS builder

# Build arguments for environment variables
ARG NODE_ENV=production
ARG PORT=3000
ARG ORIGIN
ARG PGA_TOUR_API_KEY
ARG CI=false

# Set environment variables for build
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV ORIGIN=${ORIGIN}
ENV PGA_TOUR_API_KEY=${PGA_TOUR_API_KEY}
ENV CI=${CI}

WORKDIR /app

# Copy workspace files
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

# Install dependencies with proper cache mount
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store/v3 \
    pnpm install --frozen-lockfile

# Copy source code
COPY --from=pruner /app/out/full/ .

# Build the application
RUN turbo build --filter=@app/server

# Production dependencies only
RUN pnpm prune --prod --no-optional

# Remove source files and dev dependencies
RUN rm -rf ./**/*/src ./**/*/test ./**/*/tests ./**/*/*.test.* ./**/*/*.spec.* && \
    find . -name "*.ts" -not -path "./node_modules/*" -delete && \
    find . -name "*.tsx" -not -path "./node_modules/*" -delete && \
    find . -name "tsconfig*.json" -delete && \
    find . -name "vite.config.*" -delete && \
    find . -name "vitest.config.*" -delete && \
    find . -name "eslint.config.*" -delete

# Final production image
FROM node:22-alpine AS runner

# Install only runtime dependencies
RUN apk add --no-cache libc6-compat && \
    npm install -g pnpm@9.14.3

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Set working directory
WORKDIR /app

# Copy built application
COPY --from=builder --chown=nodejs:nodejs /app .

# Switch to non-root user
USER nodejs

# Set working directory to server app
WORKDIR /app/apps/server

# Runtime environment variables
ARG NODE_ENV=production
ARG PORT=3000
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
EXPOSE ${PORT}

# Use pnpm start command
CMD ["pnpm", "start"]


# backup
# # Alpine image
# FROM node:22-alpine AS alpine
# RUN apk update
# RUN apk add --no-cache libc6-compat

# # Setup pnpm and turbo on the alpine base
# FROM alpine AS base
# RUN npm install pnpm turbo --global
# RUN pnpm config set store-dir /root/.local/share/pnpm/store/v3

# # Prune projects
# FROM base AS pruner

# WORKDIR /app
# COPY . .
# RUN turbo prune --scope=@app/server --docker

# # Build the project
# FROM base AS builder

# ARG PORT
# ARG ORIGIN
# ARG PGA_TOUR_API_KEY

# WORKDIR /app

# # Copy lockfile and package.json's of isolated subworkspace
# COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
# COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
# COPY --from=pruner /app/out/json/ .

# # First install the dependencies (as they change less often)
# RUN --mount=type=cache,id=s/9f7fc579-219b-497f-aa57-18d68a0327ba-/root/local/share/pnpm/store/v3,target=/root/local/share/pnpm/store/v3 \
#   pnpm install --frozen-lockfile

# # Copy source code of isolated subworkspace
# COPY --from=pruner /app/out/full/ .

# RUN turbo build --filter=@app/server
# RUN pnpm prune --prod --no-optional
# RUN rm -rf ./**/*/src

# # Final image
# FROM alpine AS runner
# ARG PROJECT

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nodejs
# USER nodejs

# WORKDIR /app
# COPY --from=builder --chown=nodejs:nodejs /app .
# WORKDIR /app/apps/server

# ARG NODE_ENV
# ARG PORT
# ENV PORT=${PORT}
# ENV NODE_ENV=production
# EXPOSE ${PORT}

# CMD ["node", "dist/index.js"]
