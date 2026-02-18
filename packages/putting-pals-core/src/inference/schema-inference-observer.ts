import { InternalServerError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { SchemaInferenceObserver } from "./interfaces/inbound/schema-inference-observer";

type TypeName =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "null"
  | "undefined";

interface FieldMeta {
  types: Record<TypeName, true>;
  optional: boolean;
  values?: Record<string, true>; // primitives only
  children?: Record<string, FieldMeta>; // for objects
  items?: FieldMeta; // for arrays
}

export class SchemaInferenceObserverImpl implements SchemaInferenceObserver {
  async inferSchema(_tourCode: TourCode): Promise<void> {
    const espnTourCodes = ["pga", "eur", "liv", "ntw", "champions-tour"];
    await Promise.all(
      espnTourCodes.map(async (tourCode) => {
        const leaderboard = await this.getLeaderboard(tourCode);
        const inferredSchema = infer(leaderboard);
        console.log(JSON.stringify(inferredSchema, null, 2));
      }),
    );
  }

  private async getLeaderboard(tourCode: string): Promise<unknown> {
    const response = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=${tourCode}`,
      { method: "GET" },
    );
    if (!response.ok) {
      const body = await response.text();
      throw new InternalServerError(
        `ESPN API error: ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`,
      );
    }
    return await response.json();
  }
}

function infer(value: unknown): FieldMeta {
  if (value === null) return { types: { null: true }, optional: false };

  if (Array.isArray(value))
    return {
      types: { array: true },
      optional: false,
      items: mergeAll(value.map(infer)),
    };

  if (typeof value === "object")
    return {
      types: { object: true },
      optional: false,
      children: mapValues(value, infer),
    };

  return {
    types: { [typeof value]: true },
    optional: false,
    // values: maybeCollect(value),
  };
}

function mergeAll(list: FieldMeta[]): FieldMeta | undefined {
  return list.reduce<FieldMeta | undefined>((acc, curr) => {
    if (!acc) return curr;
    return merge(acc, curr) ?? acc;
  }, undefined);
}

function merge(
  a: FieldMeta | undefined,
  b: FieldMeta | undefined,
): FieldMeta | undefined {
  if (!a) return b;
  if (!b) return a;
  const mergedItems =
    a.items !== undefined || b.items !== undefined
      ? merge(a.items, b.items)
      : undefined;
  return {
    types: union(a.types, b.types),
    optional: a.optional || b.optional,
    values: unionLimited(a.values, b.values),
    children: mergeChildren(a.children, b.children),
    ...(mergedItems !== undefined && { items: mergedItems }),
  };
}

function mapValues(
  obj: object,
  fn: (value: unknown) => FieldMeta,
): Record<string, FieldMeta> {
  const result = {};
  for (const key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
}

function union(a = {}, b = {}) {
  return { ...a, ...b };
}

const MAX_ENUM = 20;

function unionLimited(a = {}, b = {}) {
  const result = { ...a };

  for (const key in b) {
    result[key] = true;
  }

  if (Object.keys(result).length > MAX_ENUM) return undefined; // abandon enum tracking

  return result;
}

function mergeChildren(a = {}, b = {}) {
  const result = {};
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const key of keys) {
    if (a[key] && b[key]) {
      result[key] = merge(a[key], b[key]);
    } else if (a[key]) {
      result[key] = { ...a[key], optional: true };
    } else {
      result[key] = { ...b[key], optional: true };
    }
  }

  return result;
}
