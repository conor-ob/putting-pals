import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  TRPC_API_URL: z.string(),
  // .transform((val) => {
  //   const trimmed = val.trim();
  //   // If it's already a full URL, check if it needs /trpc appended
  //   if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
  //     return trimmed.endsWith("/trpc") ? trimmed : `${trimmed}/trpc`;
  //   }
  //   // For Railway private networking (e.g., "server.railway.internal"),
  //   // prepend http:// and append /trpc if not present
  //   const url = `http://${trimmed}`;
  //   return url.endsWith("/trpc") ? url : `${url}/trpc`;
  // })
  // .pipe(z.url()),
});

export const env = envSchema.parse(process.env);
