import { readFileSync } from "node:fs";
import { parse } from "dotenv";
import { expect, test } from "vitest";

import { dotenvSchema } from "./schema";

test(".env.example matches the env schema", () => {
  const example = parse(readFileSync(".env.example"));
  expect(dotenvSchema.safeParse(example).success).toBe(true);
});

test("every env var is declared in turbo.json", () => {
  const turbo = JSON.parse(readFileSync("../../turbo.json", "utf8"));
  const declared = new Set<string>(turbo.globalEnv);
  const missing = Object.keys(dotenvSchema.shape).filter(
    (key) => !declared.has(key),
  );
  expect(missing).toEqual([]);
});
