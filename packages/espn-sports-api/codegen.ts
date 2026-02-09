import * as fs from "node:fs";
import * as path from "node:path";
import z from "zod";

const TournamentSchema = z.object({
  id: z.string(),
  logo: z.string().optional(),
  cover: z.string().optional(),
});

const raw = TournamentSchema.array().parse(
  JSON.parse(fs.readFileSync("data.json", "utf8")),
);

const idx = {} as Record<string, number>;

raw.forEach((c, i) => {
  idx[c.id] = i;
});

const out = `export const TOURNAMENTS = ${JSON.stringify(raw, null, 2)} as const

export const INDEX = ${JSON.stringify(idx, null, 2)} as const`;

fs.writeFileSync(path.join("src", "generated", "tournaments.ts"), out);
