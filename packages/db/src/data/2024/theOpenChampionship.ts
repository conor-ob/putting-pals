import {
  aidanWalsh,
  aimeeOhanlon,
  brianObrolchain,
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
  aaronRai,
  adamScott,
  akshayBhatia,
  alexNoren,
  billyHorschel,
  brooksKoepka,
  collinMorikawa,
  joaquinNiemann,
  jonRahm,
  ludvigAberg,
  mattWallace,
  maxHoma,
  nicolaiHojgaard,
  padraigHarrington,
  patrickCantlay,
  robertMacIntyre,
  roryMcilroy,
  ryanFox,
  samBurns,
  scottieScheffler,
  shaneLowry,
  tigerWoods,
  tommyFleetwood,
  victorPerez,
  viktorHovland,
  wyndhamClark,
} from "../players/pgaTourPlayers";

export default {
  tournamentId: "R2024100",
  paddyPowerId: undefined,
  winnerId: conorObrien.id,
  runnerUpId: johnHannaway.id,
  competitors: [
    {
      ...aidanWalsh,
      picks: [ludvigAberg, collinMorikawa, tigerWoods], // 14 + 18 + 250 = 282/1
    },
    {
      ...davidHynes,
      picks: [roryMcilroy, shaneLowry, padraigHarrington], // 6 + 25 + 175 = 206
    },
    {
      ...cameronFolens,
      picks: [ludvigAberg, collinMorikawa, mattWallace], // 11 + 12 + 150 = 173/1
    },
    {
      ...conorObrien,
      picks: [tommyFleetwood, jonRahm, billyHorschel], // 16 + 18 + 110 = 144/1
    },
    {
      ...ciaranTighe,
      picks: [viktorHovland, aaronRai, maxHoma], // 22 + 40 + 70 = 142/1
    },
    {
      ...richByrne,
      picks: [roryMcilroy, robertMacIntyre, samBurns], // 6 + 22 + 110 = 138/1
    },
    {
      ...robJoy,
      picks: [brooksKoepka, adamScott, maxHoma], // 28 + 40 + 70 = 138/1
    },
    {
      ...stephenDevine,
      picks: [aaronRai, wyndhamClark, joaquinNiemann], // 40 + 45 + 45 = 130/1
    },
    {
      ...brianObrolchain,
      picks: [roryMcilroy, collinMorikawa, nicolaiHojgaard], // 6 + 12 + 110 = 128/1
    },
    {
      ...johnHannaway,
      picks: [shaneLowry, alexNoren, akshayBhatia], // 25 + 33 + 70 = 128/1
    },
    {
      ...aimeeOhanlon,
      picks: [scottieScheffler, viktorHovland, victorPerez], // 4 + 22 + 100 = 126/1
    },
    {
      ...phelimOconnor,
      picks: [roryMcilroy, patrickCantlay, ryanFox], // 6 + 40 + 80 = 126/1
    },
  ],
};
