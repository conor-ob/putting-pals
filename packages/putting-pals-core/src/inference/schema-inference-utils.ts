import type { InferredSchema } from "./domain/types";

export function infer(value: unknown): InferredSchema {
  if (value === null) {
    return { types: { null: true }, optional: false };
  }

  if (Array.isArray(value)) {
    return {
      types: { array: true },
      optional: false,
      items: mergeAll(value.map(infer)),
    };
  }

  if (typeof value === "object") {
    return {
      types: { object: true },
      optional: false,
      children: mapValues(value, infer),
    };
  }

  return {
    types: { [typeof value]: true },
    optional: false,
    values: maybeCollect(value),
  };
}

function mergeAll(list: InferredSchema[]): InferredSchema | undefined {
  return list.reduce<InferredSchema | undefined>((acc, curr) => {
    if (!acc) return curr;
    return merge(acc, curr) ?? acc;
  }, undefined);
}

export function merge(
  a: InferredSchema | undefined,
  b: InferredSchema | undefined,
): InferredSchema | undefined {
  if (!a) return b;
  if (!b) return a;

  return {
    types: union(a.types, b.types),
    optional: a.optional || b.optional,
    values: unionLimited(a.values, b.values),
    children: mergeChildren(a.children, b.children),
    items: merge(a.items, b.items),
  };
}

function mapValues(
  obj: object,
  fn: (value: unknown) => InferredSchema,
): Record<string, InferredSchema> {
  const result: Record<string, InferredSchema> = {};
  for (const key of Object.keys(obj)) {
    result[key] = fn((obj as Record<string, unknown>)[key]);
  }
  return result;
}

function union(
  a: Record<string, true> = {},
  b: Record<string, true> = {},
): Record<string, true> {
  return { ...a, ...b };
}

const MAX_ENUM = 32;

function maybeCollect(value: unknown): Record<string, true> | undefined {
  if (typeof value === "string" || typeof value === "number") {
    return { [String(value)]: true };
  }
  return undefined;
}

function unionLimited(
  a: Record<string, true> = {},
  b: Record<string, true> = {},
): Record<string, true> | undefined {
  const result: Record<string, true> = { ...a };

  for (const key of Object.keys(b)) {
    result[key] = true;
  }

  if (Object.keys(result).length > MAX_ENUM) return undefined; // abandon enum tracking

  return result;
}

function mergeChildren(
  a: Record<string, InferredSchema> = {},
  b: Record<string, InferredSchema> = {},
): Record<string, InferredSchema> {
  const result: Record<string, InferredSchema> = {};
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const key of keys) {
    if (a[key] && b[key]) {
      const merged = merge(a[key], b[key]);
      result[key] = merged ?? a[key] ?? b[key];
    } else if (a[key]) {
      const base = a[key];
      result[key] = { ...base, optional: true, types: base.types };
    } else if (b[key]) {
      const base = b[key];
      result[key] = { ...base, optional: true, types: base.types };
    }
  }

  return result;
}
