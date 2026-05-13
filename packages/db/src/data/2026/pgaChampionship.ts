import {
  aimeeOhanlon,
  conorObrien,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  alexFitzpatrick,
  brooksKoepka,
  cameronYoung,
  coreyConners,
  jasonDay,
  jonRahm,
  justinThomas,
  maxGreyserman,
  maxHoma,
  roryMcilroy,
  scottieScheffler,
  wyndhamClark,
  xanderSchauffele,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2026033",
  paddyPowerId: undefined,
  winnerId: undefined,
  runnerUpId: undefined,
  competitors: [
    {
      ...conorObrien,
      picks: [xanderSchauffele, brooksKoepka, jasonDay],
    },
    {
      ...johnHannaway,
      picks: [jonRahm, scottieScheffler, maxHoma],
    },
    {
      ...aimeeOhanlon,
      picks: [cameronYoung, justinThomas, alexFitzpatrick],
    },
    {
      ...robJoy,
      picks: [scottieScheffler, roryMcilroy, wyndhamClark],
    },
    {
      ...richByrne,
      picks: [scottieScheffler, cameronYoung, coreyConners],
    },
    {
      ...phelimOconnor,
      picks: [scottieScheffler, cameronYoung, coreyConners],
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, cameronYoung, maxGreyserman],
    },
  ],
};
