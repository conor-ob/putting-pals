import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
  cameronFolens,
  conorObrien,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  robKeartland,
  roryCoffey,
  stephenDevine,
} from "../competitors/puttingPalsCompetitors";
import {
  adamScott,
  brysonDeChambeau,
  harrisEnglish,
  jtPoston,
  justinRose,
  justinThomas,
  keithMitchell,
  lucasGlover,
  ludvigAberg,
  mackenzieHughes,
  maxHoma,
  minWooLee,
  rasmusHojgaard,
  roryMcilroy,
  scottieScheffler,
  shaneLowry,
  tommyFleetwood,
  viktorHovland,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2025033",
  paddyPowerId: undefined,
  winnerId: aimeeOhanlon.id,
  runnerUpId: richByrne.id,
  competitors: [
    {
      ...stephenDevine,
      picks: [roryMcilroy, justinThomas, mackenzieHughes], // 18 + 3.5 + 150 = 171.5/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, justinThomas, jtPoston], // 3.3 + 40 + 125 = 168.3/1
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, justinThomas, harrisEnglish], // 3.5 + 16 + 125 = 144.5/1
    },
    {
      ...aidanWalsh,
      picks: [roryMcilroy, brysonDeChambeau, adamScott], // 3.5 + 11 + 125 = 139.5/1
    },
    {
      ...richByrne,
      picks: [roryMcilroy, brysonDeChambeau, harrisEnglish], // 3.5 + 11 + 125 = 139.5/1
    },
    {
      ...cameronFolens,
      picks: [roryMcilroy, brysonDeChambeau, rasmusHojgaard], // 3.5 + 11 + 125 = 139.5/1
    },
    {
      ...robJoy,
      picks: [roryMcilroy, ludvigAberg, rasmusHojgaard], // 3.5 + 16 + 125 = 132.5/1
    },
    {
      ...conorObrien,
      picks: [scottieScheffler, roryMcilroy, lucasGlover], // 3.3 + 3.5 + 125  = 131.8/1
    },
    {
      ...robKeartland,
      picks: [tommyFleetwood, shaneLowry, minWooLee], // 28 + 40 + 60 = 128/1
    },
    {
      ...davidHynes,
      picks: [viktorHovland, shaneLowry, justinRose], // 28 + 40 + 60 = 128/1
    },
    {
      ...johnHannaway,
      picks: [brysonDeChambeau, ludvigAberg, maxHoma], // 11 + 16 + 100 = 127/1
    },
    {
      ...roryCoffey,
      picks: [brysonDeChambeau, justinThomas, keithMitchell], // 11 + 16 + 100 = 127/1
    },
    {
      ...phelimOconnor,
      picks: [brysonDeChambeau, justinThomas, maxHoma], // 11 + 16 + 100 = 127/1
    },
  ],
};
