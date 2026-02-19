import { assertNever } from "@putting-pals/putting-pals-utils";
import { InternalServerError } from "../error/service-error";
import type { InferenceTourCode, InferenceType } from "./domain/types";
import type { SchemaInferenceObserver } from "./interfaces/inbound/schema-inference-observer";

export class SchemaInferenceObserverImpl implements SchemaInferenceObserver {
  async inferSchema(
    tourCode: InferenceTourCode,
    type: InferenceType,
  ): Promise<void> {
    switch (type) {
      case "leaderboard":
        return this.inferLeaderboardSchema(tourCode);
      case "schedule":
        return this.inferScheduleSchema(tourCode);
      default:
        assertNever(type);
    }
  }

  private async inferLeaderboardSchema(
    tourCode: InferenceTourCode,
  ): Promise<void> {
    const leaderboard = await this.getLeaderboard(tourCode);
    // const inferredSchema = infer(leaderboard);
    // biome-ignore lint/suspicious/noConsole: testing
    console.log(JSON.stringify(leaderboard, null, 2));
  }

  private async inferScheduleSchema(
    tourCode: InferenceTourCode,
  ): Promise<void> {
    const schedule = await this.getSchedule(tourCode);
    // const inferredSchema = infer(schedule);
    // biome-ignore lint/suspicious/noConsole: testing
    console.log(JSON.stringify(schedule, null, 2));
  }

  private async getLeaderboard(tourCode: InferenceTourCode): Promise<unknown> {
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

  private async getSchedule(tourCode: InferenceTourCode): Promise<unknown> {
    const response = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/golf/${tourCode}/tourschedule`,
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

// function infer(value: unknown): FieldMeta {
//   if (value === null) return { types: { null: true }, optional: false };

//   if (Array.isArray(value))
//     return {
//       types: { array: true },
//       optional: false,
//       items: mergeAll(value.map(infer)),
//     };

//   if (typeof value === "object")
//     return {
//       types: { object: true },
//       optional: false,
//       children: mapValues(value, infer),
//     };

//   return {
//     types: { [typeof value]: true },
//     optional: false,
//     // values: maybeCollect(value),
//   };
// }

// function mergeAll(list: FieldMeta[]): FieldMeta | undefined {
//   return list.reduce<FieldMeta | undefined>((acc, curr) => {
//     if (!acc) return curr;
//     return merge(acc, curr) ?? acc;
//   }, undefined);
// }

// function merge(
//   a: FieldMeta | undefined,
//   b: FieldMeta | undefined,
// ): FieldMeta | undefined {
//   if (!a) return b;
//   if (!b) return a;
//   const mergedItems =
//     a.items !== undefined || b.items !== undefined
//       ? merge(a.items, b.items)
//       : undefined;
//   return {
//     types: union(a.types, b.types),
//     optional: a.optional || b.optional,
//     values: unionLimited(a.values, b.values),
//     children: mergeChildren(a.children, b.children),
//     ...(mergedItems !== undefined && { items: mergedItems }),
//   };
// }

// function mapValues(
//   obj: object,
//   fn: (value: unknown) => FieldMeta,
// ): Record<string, FieldMeta> {
//   const result = {};
//   for (const key in obj) {
//     result[key] = fn(obj[key]);
//   }
//   return result;
// }

// function union(a = {}, b = {}) {
//   return { ...a, ...b };
// }

// const MAX_ENUM = 20;

// function unionLimited(a = {}, b = {}) {
//   const result = { ...a };

//   for (const key in b) {
//     result[key] = true;
//   }

//   if (Object.keys(result).length > MAX_ENUM) return undefined; // abandon enum tracking

//   return result;
// }

// function mergeChildren(a = {}, b = {}) {
//   const result = {};
//   const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

//   for (const key of keys) {
//     if (a[key] && b[key]) {
//       result[key] = merge(a[key], b[key]);
//     } else if (a[key]) {
//       result[key] = { ...a[key], optional: true };
//     } else {
//       result[key] = { ...b[key], optional: true };
//     }
//   }

//   return result;
// }
