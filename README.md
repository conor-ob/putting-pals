# Turbostack template

This is a full-stack [Turborepo](https://turbo.build/) template using a Fastify server on the backend and an Ionic PWA on the frontend which are both sitting behind a Caddy reverse proxy

## What's inside?

This template includes the following packages/apps:

### Apps

- `proxy`: [Caddy](https://caddyserver.com/) reverse proxy
- `server`: [Fastify](https://fastify.dev/) server
- `web`: [Ionic](https://ionicframework.com/) PWA

### Packages

- `api`: [tRPC](https://trpc.io/) router
- `db`: [Drizzle](https://orm.drizzle.team/) ORM for [Postgres](https://www.postgresql.org/)
- `ui`: [Shadcn](https://ui.shadcn.com/) component library
- `utils`: Common utilities

### Tooling

- `eslint`: [ESLint](https://eslint.org/) configuration
- `prettier`: [Prettier](https://prettier.io/) configuration

## Using this template

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) (needed for local Postgres database)

2. Copy `.env.example` into `.env` in both `server` and `web`

3. Install dependencies with pnpm:

```sh
pnpm install
```

4. Start the development server:

```sh
pnpm dev
```

This will start the Fastify server, Ionic app and Postgres Docker container.
Both the server and web apps are using Vite in development for HMR

## Further reading

- Managing environment [variables](./docs/variables.md)
- [Deployment](./docs/deployment.md) on Railway
