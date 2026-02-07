import * as fs from "node:fs";
import * as path from "node:path";
import { CountrySchema } from "./src/domain/schemas";

const raw = CountrySchema.array().parse(
  JSON.parse(fs.readFileSync("codes.json", "utf8")),
);

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

const idx = {
  alpha2: {} as Record<string, number>,
  alpha3: {} as Record<string, number>,
  ioc: {} as Record<string, number>,
  name: {} as Record<string, number>,
  alias: {} as Record<string, number>,
};

raw.forEach((c, i) => {
  idx.alpha2[c.alpha2] = i;
  idx.alpha3[c.alpha3] = i;
  idx.ioc[c.ioc] = i;
  idx.name[norm(c.name)] = i;
  c.alias?.forEach((n) => {
    idx.alias[norm(n)] = i;
  });
});

const out = `
export const COUNTRIES = ${JSON.stringify(raw, null, 2)} as const

export const INDEX = ${JSON.stringify(idx, null, 2)} as const
`;

fs.writeFileSync(path.join("src", "generated", "codes.ts"), out);
