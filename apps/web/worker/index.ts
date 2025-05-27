import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTrpcContext } from "@pkg/api/context";
import { appRouter } from "@pkg/api/router";

type Env = {
  ASSETS: Fetcher;
};

export default {
  fetch(request, _) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

    if (url.pathname.startsWith("/trpc")) {
      return fetchRequestHandler({
        endpoint: "/trpc",
        req: request,
        router: appRouter,
        createContext: createTrpcContext,
      });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
