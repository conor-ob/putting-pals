import { fromPartial } from "@total-typescript/shoehorn";
import * as cheerio from "cheerio";
import { describe, expect, it } from "vitest";
import type { EuropeanTourTournament } from "./domain/types";
import { extractEventToggles, matchEventIds } from "./event-ids";

const tournament = (name: string) =>
  fromPartial<EuropeanTourTournament>({ name });

describe("extractEventToggles", () => {
  it("reads event ids and decoded titles, deduplicated by id", () => {
    const $ = cheerio.load(`
      <li><favourite-event-toggle :event-id=2026139 event-title="Open de Espa&#xF1;a presented by Madrid"/></li>
      <li><favourite-event-toggle :event-id=2026139 event-title="Open de España presented by Madrid"/></li>
      <li><favourite-event-toggle :event-id=2026144 event-title="Alfred Dunhill Links Championship"/></li>
      <li><favourite-event-toggle :event-id=oops event-title="Broken"/></li>
      <li><some-other-element :event-id=2026140 event-title="DP World India Championship"></some-other-element></li>
      <li><favourite-event-toggle :event-id=2026150/></li>
    `);

    expect(extractEventToggles($)).toEqual([
      { eventId: 2026139, title: "Open de España presented by Madrid" },
      { eventId: 2026144, title: "Alfred Dunhill Links Championship" },
      { eventId: 2026140, title: "DP World India Championship" },
    ]);
  });

  it("accepts common variations of the attribute names", () => {
    const $ = cheerio.load(`
      <div event-id="2026101" event-title="Plain"></div>
      <div v-bind:event-id="2026102" event-title="Vue Long Form"></div>
      <div data-event-id="2026103" data-event-title="Data Attributes"></div>
      <div eventId="2026104" eventName="Camel Case"></div>
      <div :event-id="2026105" event-name="Event Name"></div>
    `);

    expect(extractEventToggles($).map(({ eventId }) => eventId)).toEqual([
      2026101, 2026102, 2026103, 2026104, 2026105,
    ]);
  });

  it("ignores ids that aren't a season year and sequence number", () => {
    const $ = cheerio.load(`
      <div :event-id="49073" event-title="Too Short"></div>
      <div :event-id="20261391" event-title="Too Long"></div>
      <div :event-id="eventId" event-title="Expression"></div>
      <div prize-event-id="2026139" event-title="Different Attribute"></div>
    `);

    expect(extractEventToggles($)).toEqual([]);
  });
});

describe("matchEventIds", () => {
  it("matches names that differ in case, accents and sponsor words", () => {
    const result = matchEventIds(
      [
        tournament("DP WORLD TOUR CHAMPIONSHIP, DUBAI"),
        tournament("Open de Espana"),
      ],
      [
        { eventId: 1, title: "Open de España presented by Madrid" },
        { eventId: 2, title: "DP World Tour Championship, Dubai" },
      ],
    );

    expect(result.map(({ eventId }) => eventId)).toEqual([2, 1]);
  });

  it("does not give one event id to two tournaments", () => {
    const result = matchEventIds(
      [tournament("Qatar Masters"), tournament("Bahrain Championship")],
      [{ eventId: 1, title: "Bapco Energies Bahrain Championship" }],
    );

    expect(result.map(({ eventId }) => eventId)).toEqual([undefined, 1]);
  });
});
