# v0 template

This is a full-stack [Turborepo](https://turbo.build/) template using a Fastify server on the backend and an Ionic PWA on the frontend which are both sitting behind a Caddy reverse proxy

## What's inside?

This template includes the following packages/apps:

### Apps

- `proxy`: [Caddy](https://caddyserver.com/) reverse proxy
- `server`: [Fastify](https://fastify.dev/) server
- `web`: [Ionic](https://ionicframework.com/) PWA

### Packages

- `api`: [tRPC](https://trpc.io/) router
- `ui`: [Shadcn](https://ui.shadcn.com/) component library

### Tooling

- `eslint`: [ESLint](https://eslint.org/) configuration
- `prettier`: [Prettier](https://prettier.io/) configuration

## Using this template

1. Copy `.env.example` into `.env` in both `server` and `web`

2. Install dependencies with pnpm:

```sh
pnpm install
```

3. Start the development server:

```sh
pnpm dev
```

This will start the Fastify server and Ionic app using Vite for HMR

## TODO

- [ ] remove warnings from prod deployment
  - [ ] [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
  - [ ] ExperimentalWarning: SQLite is an experimental feature and might change at any time (--experimental-sqlite ??)
- [ ] refactor API
  - [ ] Create PGA tour graphql types
  - [ ] Create display types (name TBD) for all PGA tour graphql types
- [ ] leaderboard loading skeleton
- [ ] search improvements
  - [ ] add empty state
  - [ ] cancel button colour
- [ ] fix colours
  - [ ] update shadcn design library colours
  - [ ] remove hardcoded colours like leaderboard abbreviations
- [x] implement text carousel for tournament info
- [ ] implement service worker prompt to refresh
