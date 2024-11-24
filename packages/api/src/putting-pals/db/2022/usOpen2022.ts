import {
  adriArnaus,
  billyHorschel,
  brooksKoepka,
  cameronYoung,
  garyWoodland,
  haroldVarnerIII,
  jonRahm,
  jordanSpieth,
  justinRose,
  justinThomas,
  lukeList,
  roryMcilroy,
  ryanFox,
  seamusPower,
  shaneLowry,
  taylorGooch,
  taylorMontgomery,
  tommyFleetwood,
  tonyFinau,
  tyrrellHatton,
  willZalatoris,
  xanderSchauffele,
} from "../pgaTourPlayers";
import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  markByrne,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  stephenDevine,
} from "../puttingPalsPlayers";

export const usOpen2022 = {
  id: "R2022026",
  seasonId: "2022",
  shortName: "US Open",
  name: "U.S. Open",
  winnerId: johnHannaway.id,
  runnerUpId: aidanWalsh.id,
  players: [
    {
      ...conorObrien,
      picks: [billyHorschel, brooksKoepka, tommyFleetwood],
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, haroldVarnerIII, seamusPower],
    },
    {
      ...stephenDevine,
      picks: [roryMcilroy, justinThomas, lukeList],
    },
    {
      ...cameronFolens,
      picks: [willZalatoris, cameronYoung, taylorGooch],
    },
    {
      ...davidHynes,
      picks: [tonyFinau, justinRose, seamusPower],
    },
    {
      ...johnHannaway,
      picks: [xanderSchauffele, willZalatoris, taylorMontgomery],
    },
    {
      ...aidanWalsh,
      picks: [roryMcilroy, shaneLowry, garyWoodland],
    },
    {
      ...robKeartland,
      picks: [roryMcilroy, xanderSchauffele, adriArnaus],
    },
    {
      ...richByrne,
      picks: [justinThomas, jonRahm, ryanFox],
    },
    {
      ...robJoy,
      picks: [roryMcilroy, justinThomas, ryanFox],
    },
    {
      ...aimeeOhanlon,
      picks: [jordanSpieth, tonyFinau, taylorGooch],
    },
    {
      ...phelimOconnor,
      picks: [roryMcilroy, justinRose, tyrrellHatton],
    },
    {
      ...markByrne,
      picks: [roryMcilroy, tommyFleetwood, seamusPower],
    },
  ],
};
