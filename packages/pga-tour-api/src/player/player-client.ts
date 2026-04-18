import type {
  Player,
  PlayerClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { PLAYERS } from "../generated/players";

export class PgaTourApiPlayerClient implements PlayerClient {
  getPlayers(_tourCode: TourCode): Player[] {
    return PLAYERS;
  }
}
