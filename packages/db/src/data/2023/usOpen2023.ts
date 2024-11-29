import {
  aidanWalsh,
  aimeeOhanlon,
  cameronFolens,
  ciaranTighe,
  conorObrien,
  davidHynes,
  johnHannaway,
  phelimOconnor,
  richByrne,
  robJoy,
  stephenDevine,
} from "../entrants/puttingPalsEntrants";
import {
  adamScott,
  brooksKoepka,
  camDavis,
  collinMorikawa,
  coreyConners,
  dennyMccarthy,
  garyWoodland,
  jonRahm,
  justinRose,
  justinThomas,
  mattFitzpatrick,
  mattKuchar,
  maxHoma,
  patrickReed,
  philMickelson,
  roryMcilroy,
  russellHenley,
  ryanFox,
  scottieScheffler,
  tommyFleetwood,
  viktorHovland,
} from "../players/pgaTourPlayers";

export const usOpen2023 = {
  tournamentId: "R2023026",
  seasonId: "2023",
  shortName: "US Open",
  name: "U.S. Open",
  winnerId: aidanWalsh.id,
  runnerUpId: robJoy.id,
  entrants: [
    {
      ...conorObrien,
      picks: [maxHoma, justinThomas, adamScott],
    },
    {
      ...aimeeOhanlon,
      picks: [viktorHovland, collinMorikawa, dennyMccarthy],
    },
    {
      ...richByrne,
      picks: [scottieScheffler, brooksKoepka, garyWoodland],
    },
    {
      ...johnHannaway,
      picks: [scottieScheffler, viktorHovland, mattKuchar],
    },
    {
      ...phelimOconnor,
      picks: [tommyFleetwood, justinRose, patrickReed],
    },
    {
      ...robJoy,
      picks: [ryanFox, scottieScheffler, roryMcilroy],
    },
    {
      ...ciaranTighe,
      picks: [philMickelson, scottieScheffler, jonRahm],
    },
    {
      ...davidHynes,
      picks: [tommyFleetwood, adamScott, mattFitzpatrick],
    },
    {
      ...stephenDevine,
      picks: [viktorHovland, coreyConners, russellHenley],
    },
    {
      ...aidanWalsh,
      picks: [scottieScheffler, jonRahm, russellHenley],
    },
    {
      ...cameronFolens,
      picks: [scottieScheffler, jonRahm, camDavis],
    },
  ],
};
