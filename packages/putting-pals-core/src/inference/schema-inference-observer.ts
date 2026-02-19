import { assertNever } from "@putting-pals/putting-pals-utils";
import { InternalServerError } from "../error/service-error";
import type { InferenceTourCode, InferenceType } from "./domain/types";
import type { SchemaInferenceObserver } from "./interfaces/inbound/schema-inference-observer";
import type { SchemaInferenceChangeRepository } from "./interfaces/outbound/schema-inference-change-repository";
import type { SchemaInferenceRepository } from "./interfaces/outbound/schema-inference-repository";
import { infer, merge } from "./schema-inference-utils";

export class SchemaInferenceObserverImpl implements SchemaInferenceObserver {
  constructor(
    private readonly schemaInferenceRepository: SchemaInferenceRepository,
    // biome-ignore lint/correctness/noUnusedPrivateClassMembers: todo
    private readonly schemaInferenceChangeRepository: SchemaInferenceChangeRepository,
  ) {
    this.schemaInferenceRepository = schemaInferenceRepository;
    this.schemaInferenceChangeRepository = schemaInferenceChangeRepository;
  }

  async inferSchema(
    tourCode: InferenceTourCode,
    type: InferenceType,
  ): Promise<void> {
    switch (type) {
      case "leaderboard":
        return this.getLeaderboard(tourCode).then((leaderboard) =>
          this.inferSchemaImpl("leaderboard", leaderboard),
        );
      case "schedule":
        return this.getSchedule(tourCode).then((schedule) =>
          this.inferSchemaImpl("schedule", schedule),
        );
      default:
        assertNever(type);
    }
  }

  private async inferSchemaImpl(
    type: InferenceType,
    value: unknown,
  ): Promise<void> {
    const prevInferredSchema = await this.schemaInferenceRepository
      .getSchema(type)
      .then((schema) => (schema ? schema : undefined));
    const nextInferredSchema = infer(value);

    if (prevInferredSchema === undefined) {
      await this.schemaInferenceRepository.createSchema(
        type,
        nextInferredSchema,
      );

      return;
    }

    const mergedSchema = merge(prevInferredSchema, nextInferredSchema);
    if (mergedSchema === undefined) {
      return;
    }

    await this.schemaInferenceRepository.updateSchema(type, mergedSchema);
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
