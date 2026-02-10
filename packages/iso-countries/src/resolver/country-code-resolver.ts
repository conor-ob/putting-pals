import type { Entity } from "../domain/types";
import { COUNTRIES, INDEX } from "../generated/countries";

export const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

export function resolve(v: string): Entity | null {
  const i =
    INDEX.iso2[v as keyof typeof INDEX.iso2] ??
    INDEX.iso3[v as keyof typeof INDEX.iso3] ??
    INDEX.ioc[v as keyof typeof INDEX.ioc] ??
    INDEX.name[norm(v) as keyof typeof INDEX.name] ??
    INDEX.alias?.[norm(v) as keyof typeof INDEX.alias];

  return i === undefined ? null : COUNTRIES[i];
}

export const convert = <K extends keyof (typeof COUNTRIES)[number]>(
  v: string,
  to: K,
) => resolve(v)?.[to] ?? null;
