# v0 template

This is a full-stack [Turborepo](https://turbo.build/) template using a Fastify server on the backend and an Expo app on the frontend which are both sitting behind a Caddy reverse proxy

## What's inside?

This template includes the following packages/apps:

### Apps

- `expo`: [Expo](https://expo.dev/) app
- `proxy`: [Caddy](https://caddyserver.com/) reverse proxy
- `server`: [Fastify](https://fastify.dev/) server

### Packages

- `api`: [tRPC](https://trpc.io/) router

### Tooling

- `biome`: [Biome](https://biomejs.dev/) configuration

## Using this template

1. Copy `.env.example` into `.env` in `server`

2. Install dependencies with pnpm:

```sh
pnpm install
```

3. Start the development server:

```sh
pnpm dev
```

This will start the Fastify server and Expo app

## TODO

- [ ] Reduce response payload sent to expo client. Maybe use tRPC output schema to remove redundant fields
- [ ] remove warnings from prod deployment
  - [ ] [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
  - [ ] ExperimentalWarning: SQLite is an experimental feature and might change at any time (--experimental-sqlite ??)
- [ ] implement service worker prompt to refresh
  - [ ] implement servic worker reload https://github.com/ccssmnn/tilly/blob/main/src/app/sw.ts https://github.com/ccssmnn/tilly/blob/main/src/app/lib/service-worker.ts
- [ ] expo lint config
- [ ] revert to caddy:alpine image for expo app

## Docs

- [PostgreSQL local development](https://orm.drizzle.team/docs/guides/postgresql-local-setup)
- [Turborepo environment variables configuration](https://github.com/vercel/turborepo/discussions/9458#discussioncomment-11443969)
