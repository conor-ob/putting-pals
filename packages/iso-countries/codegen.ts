import * as fs from "node:fs";
import * as path from "node:path";
import { EntitySchema } from "./src/domain/schemas";

const raw = EntitySchema.array().parse(
  JSON.parse(fs.readFileSync("codes.json", "utf8")),
);

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

const idx = {
  iso2: {} as Record<string, number>,
  iso3: {} as Record<string, number>,
  ioc: {} as Record<string, number>,
  name: {} as Record<string, number>,
  alias: {} as Record<string, number>,
};

raw.forEach((c, i) => {
  switch (c.__typename) {
    case "Country":
      idx.iso2[c.iso2] = i;
      idx.iso3[c.iso3] = i;
      if (c.ioc) idx.ioc[c.ioc] = i;
      idx.name[norm(c.name)] = i;
      c.alias?.forEach((n) => {
        idx.alias[norm(n)] = i;
      });
      break;
    case "Subdivision":
      idx.iso2[c.iso2] = i;
      idx.iso3[c.iso3] = i;
      idx.ioc[c.ioc] = i;
      idx.name[norm(c.name)] = i;
      break;
    case "State":
      idx.iso2[c.iso2] = i;
      idx.name[norm(c.name)] = i;
      break;
  }
});

const out = `export const COUNTRIES = ${JSON.stringify(raw, null, 2)} as const

export const INDEX = ${JSON.stringify(idx, null, 2)} as const
`;

fs.writeFileSync(path.join("src", "generated", "codes.ts"), out);
