import { robJoy } from "../competitors/puttingPalsCompetitors";
import {
  aldrichPotgieter,
  roryMcilroy,
  scottieScheffler,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025100",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, aldrichPotgieter], // 4.5 + 7 + 175 = 186.5/1
    },
  ],
};
