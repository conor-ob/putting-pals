import type { Tournament } from "@putting-pals/putting-pals-core";
import { INDEX, TOURNAMENTS } from "../generated/tournaments";

export function resolve(id: string): Partial<Tournament> | null {
  const i = INDEX[id as keyof typeof INDEX];

  return i === undefined ? null : (TOURNAMENTS[i] as Partial<Tournament>);
}
