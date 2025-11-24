import type { CodegenConfig } from "@graphql-codegen/cli";

import { env } from "./src/env/schema";

const config: CodegenConfig = {
  schema: [
    {
      "https://orchestrator.pgatour.com/graphql": {
        headers: {
          "X-Api-Key": env.PGA_TOUR_API_KEY,
        },
      },
    },
  ],
  generates: {
    "src/api/types.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
