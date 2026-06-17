import {
  aimeeOhanlon,
  conorObrien,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
} from "../competitors/puttingPalsCompetitors";
import {
  aaronRai,
  adamScott,
  cameronYoung,
  jacobBridgeman,
  jonRahm,
  jordanSpieth,
  jtPoston,
  justinRose,
  mattFitzpatrick,
  rickieFowler,
  roryMcilroy,
  ryanGerard,
  scottieScheffler,
  shaneLowry,
  tyrrellHatton,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026026",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...conorObrien,
      picks: [mattFitzpatrick, cameronYoung, jacobBridgeman], // 18 + 20 + 100 = 138/1
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, shaneLowry, aaronRai], // 5.5 + 60 + 66 = 131.5/1
    },
    {
      ...richByrne,
      picks: [roryMcilroy, tyrrellHatton, ryanGerard], // 11 + 40 + 80 = 131/1
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, jtPoston], // 5.5 + 11 + 110 = 126.5/1
    },
    {
      ...davidHynes,
      picks: [shaneLowry, justinRose, mattFitzpatrick], // 60 + 20 + 25 = 105/1
    },
    {
      ...phelimOconnor,
      picks: [adamScott, shaneLowry, roryMcilroy],
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, xanderSchauffele, rickieFowler],
    },
    {
      ...robKeartland,
      picks: [jonRahm, jordanSpieth, shaneLowry],
    },
  ],
};
