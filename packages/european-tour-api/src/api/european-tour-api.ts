import {
  type TourCode,
  type Tournament,
  TournamentSchema,
} from "@putting-pals/putting-pals-core";

export interface EuropeanTourApi {
  getTournament(tourCode: TourCode, id: string): Promise<Tournament>;
}

export class EuropeanTourApiImpl implements EuropeanTourApi {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const response = await fetch(`${this.baseUrl}/api/v1/eventinfo/${id}`);
    return TournamentSchema.parse(await response.json());
  }
}
