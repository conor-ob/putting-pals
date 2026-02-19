import type z from "zod";
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
  const result = {};
  for (const key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
}

function union(a = {}, b = {}) {
  return { ...a, ...b };
}

const MAX_ENUM = 32;

function maybeCollect(value: unknown): Record<string, true> | undefined {
  if (typeof value === "string" || typeof value === "number") {
    return { [String(value)]: true };
  }
  return undefined;
}

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
