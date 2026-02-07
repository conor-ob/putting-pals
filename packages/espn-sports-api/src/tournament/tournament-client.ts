import {
  NotImplementedError,
  type Tournament,
  type TournamentClient,
} from "@putting-pals/putting-pals-core";

export class EspnSportsApiTournamentClient implements TournamentClient {
  getTournament(_id: string): Promise<Tournament> {
    throw new NotImplementedError();
  }

  getTournaments(_ids: string[]): Promise<Tournament[]> {
    throw new NotImplementedError();
  }
}
