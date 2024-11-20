# Deployment

This repo is set up to be deployed to [Railway](https://railway.app/)

## Prerequisites

Create [Sentry](https://sentry.io/)

- Fastify based project for `server`
- React based project for `web`

## Before deployment

- Update app name in [package.json](../package.json)
- Update `DATABASE_URL` environment variables
- Update `DATABASE_PREFIX` environment variables
- Update `SENTRY_PROJECT` environment variables

## Deploying to Railway

### 1. GitHub

- create `production` environment if it doesn't exist
- add these 2 secrets
  - `SENTRY_AUTH_TOKEN`
  - `SENTRY_ORG`

### 2. Railway

- create a new empty project
- add a service -> PostgreSQL
  - rename to `postgres`
  - update settings
    - region
    - resource limits
    - restart policy
- add a service -> GitHub -> turbostack
  - rename to `server`
  - add variables including postgres reference
    ```sh
    PORT="4000"
    ORIGIN="https://<domain.com>"
    DATABASE_URL="${{postgres.DATABASE_URL}}"
    DATABASE_PREFIX="turbostack"
    SENTRY_DSN="https://123abc@456.ingest.de.sentry.io/789"
    ```
  - update settings
    - railway config file `apps/server/railway.json`
    - region
    - resource limits
- add a service -> GitHub -> turbostack
  - rename to `web`
  - add variables
    ```sh
    PORT="3000"
    SENTRY_DSN="https://123abc@456.ingest.de.sentry.io/789"
    ```
  - update settings
    - railway config file `apps/web/railway.json`
    - region
    - resource limits
- add a service -> GitHub -> turbostack
  - rename to `proxy`
  - add variables
    ```sh
    WEB_DOMAIN="${{web.RAILWAY_PRIVATE_DOMAIN}}"
    WEB_PORT="${{web.PORT}}"
    SERVER_DOMAIN="${{server.RAILWAY_PRIVATE_DOMAIN}}"
    SERVER_PORT="${{server.PORT}}"
    ```
  - update settings
    - railway config file `apps/proxy/railway.json`
    - region
    - resource limits
    - add a custom subdomain on port `8080` and copy the domain provided `abc123.up.railway.app`

### 3. Cloudflare

- Create a new DNS CNAME record
- Add the subdomain created in Railway
- Add the target provided by Railway `abc123.up.railway.app`
- Enable Cloudflare proxy
- Set SSL/TLS mode to Full (Strict)

### 4. Validation

- Open Network tab in Chrome Dev Tools
- You should see `"Server":"cloudflare"` response headers for all requests
