import {
  type ActiveTournamentClient,
  NotImplementedError,
  type TourCode,
} from "@putting-pals/putting-pals-core";

export class EspnSportsApiActiveTournamentClient
  implements ActiveTournamentClient
{
  getActiveTournamentId(_tourCode: TourCode): Promise<string | undefined> {
    throw new NotImplementedError();
  }
}
