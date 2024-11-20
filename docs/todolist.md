## TODO

- [x] Monorepo setup
  - [x] add Fastify app with fastify/vite plugin
  - [x] add Ionic app
  - [x] serve static files of Ionic app from Fastify server
    - some inspiration: https://github.com/kamilkisiela/graphql-hive
- [x] deploy to Railway
- [x] tRPC setup
  - [x] add tRPC Fastify adapter
  - [x] add tRPC React Query client
  - [x] add REST service class
  - [x] wrap service with tRPC context while keeping Fastify request context
- [x] setup GitHub actions
- [x] env variables setup
  - [x] copy env variables in GitHub actions
  - see here: https://github.com/artieeg/moviepals
- [x] Improve monorepo dependencies
  - [x] clone https://github.com/t3-oss/create-t3-turbo
  - [x] create a fastify api project and see if things work when importing api and db
    - this might be useful for tsc-alias stuff https://github.com/noahflk/react-trpc-turbo or https://github.com/artieeg/moviepals
- [x] Prettier setup
  - [x] install Tailwind
  - [x] install organise imports + tailwind plugins
- [x] Consolidate client and server apps
- [x] ESLint setup
  - see here: https://github.com/artieeg/moviepals
- [x] Improve performance and slow first load
  - [x] try moving index.html to public https://ionic-clubhouse-spaces-ui.vercel.app/home https://airhorner.com/
  - [x] set up Vite PWA
- [x] install NextUI
- [x] add shadcn
- [x] Storybook app depending on app/ package and static assets served by fastify on /storybook
- [x] setup database with Drizzle
- [x] add table prefix for reuse between applications
- [x] setup proxy through Cloudflare
  - [x] write deployment docs
- [x] CORS setup
  - [x] add cors fastify plugin
  - [x] test with wrong URL in env variables
- [x] add Fastify rate limit plugin
- [x] Vitest setup
- [x] Component libraries
  - [x] Add new package for shadcn
  - [x] Add new package for nextui
  - [x] Add new package for catalyst
  - [x] Find out how to wrap nextui components
- [x] consolidate github actions
- [x] Refactor server around Fastify best practices
- [x] implement Pino logger
  - [x] fix missing logs from REST data source
- [x] Caddy reverse proxy
  - [x] check railway templates with Caddy
- [x] Review migration
  - [x] Branch of main before migration
  - [x] compare repos
- [x] Caddy reverse proxy env variable management
- [x] Try to simplify env variables setup
- [x] Sentry setup
  - [x] setup fastify integration
  - [x] setup react integration
  - [x] fix env variable issue
  - [x] add github action to upload sourcemaps on merge to main
  - [x] check if profiling or tracing is needed
- [x] Add deps to pnpm workspace catalog
- [x] Change @turbostack to something more generic
  - [x] Find a better way to set sentry project names in vite plugin
- [x] pnpm cache in github actions
- [ ] Write docs
- [ ] Analytics setup
- [ ] Auth setup
  - [ ] Look into managing auth yourself https://docs.redwoodjs.com/docs/auth/dbauth/
  - [ ] Look into using Resend
- [ ] Settings page with notification dot to prompt PWA install
- [ ] Storybook app
- [ ] GitHub action to increment version to tag a release for sentry - look at epic stack

## PWAs

- https://github.com/alanmontgomery/ionic-clubhouse-spaces-ui
- https://github.com/aeharding/voyager
- https://github.com/PaulKinlan/air-horner

## Turborepos

- https://github.com/mattpocock/total-typescript-monorepo/tree/main
- https://github.com/artieeg/moviepals
- https://github.com/t3-oss/create-t3-turbo
- https://github.com/noahflk/react-trpc-turbo
- https://github.com/kamilkisiela/graphql-hive

## Bugs

- shadcn chart tooltip background is transparent - might be overridden by nextui
