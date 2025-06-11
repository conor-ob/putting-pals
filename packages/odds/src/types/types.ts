export type PaddyPowerCompetitionResponse = {
  attachments: {
    markets: Record<
      string,
      {
        marketType: string;
        runners: {
          selectionId: number;
          runnerName: string;
          winRunnerOdds: {
            trueOdds: {
              fractionalOdds: { numerator: number; denominator: number };
            };
          };
        }[];
      }
    >;
  };
};

export type PaddyPowerOdds = {
  id: string;
  runners: {
    id: string;
    name: string;
    odds: {
      numerator: number;
      denominator: number;
      decimal: number;
    };
  }[];
};
