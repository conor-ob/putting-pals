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
} from "../competitors/puttingPalsCompetitors";
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

export default {
  tournamentId: "R2023026",
  paddyPowerId: undefined,
  winnerId: aidanWalsh.id,
  runnerUpId: robJoy.id,
  competitors: [
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
