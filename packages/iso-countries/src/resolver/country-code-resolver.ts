import { COUNTRIES, INDEX } from "../generated/codes";

export const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

export function resolve(v: string) {
  const i =
    INDEX.alpha2[v as keyof typeof INDEX.alpha2] ??
    INDEX.alpha3[v as keyof typeof INDEX.alpha3] ??
    INDEX.ioc[v as keyof typeof INDEX.ioc] ??
    INDEX.name[norm(v) as keyof typeof INDEX.name] ??
    INDEX.alias?.[norm(v) as keyof typeof INDEX.alias];

  return i === undefined ? null : COUNTRIES[i];
}

export const convert = <K extends keyof (typeof COUNTRIES)[number]>(
  v: string,
  to: K,
) => resolve(v)?.[to] ?? null;
