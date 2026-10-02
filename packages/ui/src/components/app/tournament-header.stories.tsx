import type { Meta, StoryObj } from "@storybook/react";

import type { Tournament } from "@pkg/api/types";

import type { TournamentHeaderProps } from "./tournament-header";
import { TournamentHeader } from "./tournament-header";

const meta: Meta<typeof TournamentHeader> = {
  title: "components/app/TournamentHeader",
  component: TournamentHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TheSentry: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheSentry.args = {
  tournament: {
    name: "The Sentry",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r016.png",
    ],
    courses: [{ name: "Plantation Course at Kapalua" }],
  } as Tournament,
};

export const SonyOpenInHawaii: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

SonyOpenInHawaii.args = {
  tournament: {
    name: "Sony Open in Hawaii",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r006.png",
    ],
    courses: [{ name: "Waialae Country Club" }],
  } as Tournament,
};

export const TheAmericanExpress: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheAmericanExpress.args = {
  tournament: {
    name: "The American Express",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r002.png",
    ],
    courses: [{ name: "Pete Dye Stadium Course" }],
  } as Tournament,
};

export const FarmersInsuranceOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

FarmersInsuranceOpen.args = {
  tournament: {
    name: "Farmers Insurance Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r004.png",
    ],
    courses: [{ name: "Torrey Pines Golf Course (South Course)" }],
  } as Tournament,
};

export const PebbleBeachProAm: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PebbleBeachProAm.args = {
  tournament: {
    name: "AT&T Pebble Beach Pro-Am",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r005.png",
    ],
    courses: [{ name: "Pebble Beach Golf Links" }],
  } as Tournament,
};

export const WMPhoenixOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

WMPhoenixOpen.args = {
  tournament: {
    name: "WM Phoenix Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r003.png",
    ],
    courses: [{ name: "TPC Scottsdale (Stadium Course)" }],
  } as Tournament,
};

export const MexicoOpenAtVidanta: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MexicoOpenAtVidanta.args = {
  tournament: {
    name: "Mexico Open at Vidanta",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r540.png",
    ],
    courses: [{ name: "VidantaWorld" }],
  } as Tournament,
};

export const CognizantClassicInThePalmBeaches: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CognizantClassicInThePalmBeaches.args = {
  tournament: {
    name: "Cognizant Classic in The Palm Beaches",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r010.png",
    ],
    courses: [{ name: "PGA National Resort (The Champion Course)" }],
  } as Tournament,
};

export const ArnoldPalmerInvitationalPresentedByMastercard: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ArnoldPalmerInvitationalPresentedByMastercard.args = {
  tournament: {
    name: "Arnold Palmer Invitational presented by Mastercard",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r009.png",
    ],
    courses: [{ name: "Arnold Palmer's Bay Hill Club & Lodge" }],
  } as Tournament,
};

export const PuertoRicoOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PuertoRicoOpen.args = {
  tournament: {
    name: "Puerto Rico Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r483.png",
    ],
    courses: [{ name: "Grand Reserve Golf Club" }],
  } as Tournament,
};

export const ThePLAYERSChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ThePLAYERSChampionship.args = {
  tournament: {
    name: "THE PLAYERS Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r011.png",
    ],
    courses: [{ name: "TPC Sawgrass (THE PLAYERS Stadium Course)" }],
  } as Tournament,
};

export const ValsparChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ValsparChampionship.args = {
  tournament: {
    name: "Valspar Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r475.png",
    ],
    courses: [{ name: "Innisbrook Resort (Copperhead Course)" }],
  } as Tournament,
};

export const TexasChildrensHoustonOpen: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TexasChildrensHoustonOpen.args = {
  tournament: {
    name: "Texas Children's Houston Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r020.png",
    ],
    courses: [{ name: "Memorial Park Golf Course" }],
  } as Tournament,
};

export const ValeroTexasOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ValeroTexasOpen.args = {
  tournament: {
    name: "Valero Texas Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r041.png",
    ],
    courses: [{ name: "TPC San Antonio (Oaks Course)" }],
  } as Tournament,
};

export const MastersTournament: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MastersTournament.args = {
  tournament: {
    name: "Masters Tournament",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r014.png",
    ],
    courses: [{ name: "Augusta National Golf Club" }],
  } as Tournament,
};

export const RBCHeritage: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RBCHeritage.args = {
  tournament: {
    name: "RBC Heritage",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r012.png",
    ],
    courses: [{ name: "Harbour Town Golf Links" }],
  } as Tournament,
};

export const CoralesPuntacanaChampionship: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CoralesPuntacanaChampionship.args = {
  tournament: {
    name: "Corales Puntacana Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r522.png",
    ],
    courses: [{ name: "Puntacana Resort & Club (Corales Golf Course)" }],
  } as Tournament,
};

export const ZurichClassicOfNewOrleans: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ZurichClassicOfNewOrleans.args = {
  tournament: {
    name: "Zurich Classic of New Orleans",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r018.png",
    ],
    courses: [{ name: "TPC Louisiana" }],
  } as Tournament,
};

export const TheCJCupByronNelson: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheCJCupByronNelson.args = {
  tournament: {
    name: "THE CJ CUP Byron Nelson",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r019.png",
    ],
    courses: [{ name: "TPC Craig Ranch" }],
  } as Tournament,
};

export const WellsFargoChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

WellsFargoChampionship.args = {
  tournament: {
    name: "Wells Fargo Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r480.png",
    ],
    courses: [{ name: "Quail Hollow Club" }],
  } as Tournament,
};

export const MyrtleBeachClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MyrtleBeachClassic.args = {
  tournament: {
    name: "Myrtle Beach Classic",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r553.png",
    ],
    courses: [{ name: "Dunes Golf and Beach Club" }],
  } as Tournament,
};

export const PGAChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PGAChampionship.args = {
  tournament: {
    name: "PGA Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r033.png",
    ],
    courses: [{ name: "Valhalla Golf Club" }],
  } as Tournament,
};

export const CharlesSchwabChallenge: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CharlesSchwabChallenge.args = {
  tournament: {
    name: "Charles Schwab Challenge",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r021.png",
    ],
    courses: [{ name: "Colonial Country Club" }],
  } as Tournament,
};

export const RBCCanadianOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RBCCanadianOpen.args = {
  tournament: {
    name: "RBC Canadian Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r032.png",
    ],
    courses: [{ name: "Hamilton Golf & Country Club" }],
  } as Tournament,
};

export const TheMemorialTournamentPresentedByWorkday: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheMemorialTournamentPresentedByWorkday.args = {
  tournament: {
    name: "the Memorial Tournament presented by Workday",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r023.png",
    ],
    courses: [{ name: "Muirfield Village Golf Club" }],
  } as Tournament,
};

export const USOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

USOpen.args = {
  tournament: {
    name: "U.S. Open",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r026.png",
    ],
    courses: [{ name: "Pinehurst Resort & Country Club (Course No. 2)" }],
  } as Tournament,
};

export const TravelersChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TravelersChampionship.args = {
  tournament: {
    name: "Travelers Championship",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r034.png",
    ],
    courses: [{ name: "TPC River Highlands" }],
  } as Tournament,
};

export const RocketMortgageClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RocketMortgageClassic.args = {
  tournament: {
    name: "Rocket Mortgage Classic",
    logos: [
      "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r524.png",
    ],
    courses: [{ name: "Detroit Golf Club" }],
  } as Tournament,
};

function generateRandomArgs() {
  const roundStatusColorsByStatus = {
    COMPLETE: "BLUE",
    GROUPINGS_OFFICIAL: "BLUE",
    IN_PROGRESS: "RED",
    OFFICIAL: "GREEN",
    SUSPENDED: "YELLOW",
    UPCOMING: "GRAY",
  };
  const roundStatusDisplaysByStatus = {
    COMPLETE: "Complete",
    GROUPINGS_OFFICIAL: "Groupings Official",
    IN_PROGRESS: "In Progress",
    OFFICIAL: "Official",
    SUSPENDED: "Suspended",
    UPCOMING: "Upcoming",
  };
  const tournamentStatuses = ["COMPLETED", "IN_PROGRESS", "NOT_STARTED"];

  const status =
    tournamentStatuses[Math.floor(Math.random() * tournamentStatuses.length)];

  if (status === "NOT_STARTED") {
    const roundDisplays = ["R1"];
    const roundStatuses = ["UPCOMING", "GROUPINGS_OFFICIAL"];
    const roundStatus =
      roundStatuses[Math.floor(Math.random() * roundStatuses.length)];
    return {
      roundDisplay:
        roundDisplays[Math.floor(Math.random() * roundDisplays.length)],
      roundStatus: roundStatus,
      roundStatusColor:
        roundStatusColorsByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      roundStatusDisplay:
        roundStatusDisplaysByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      status,
    };
  }

  if (status === "IN_PROGRESS") {
    const roundDisplays = ["R1", "R2", "R3", "R4"];
    const roundStatuses = ["COMPLETE", "IN_PROGRESS", "OFFICIAL", "SUSPENDED"];
    const roundStatus =
      roundStatuses[Math.floor(Math.random() * roundStatuses.length)];
    return {
      roundDisplay:
        roundDisplays[Math.floor(Math.random() * roundDisplays.length)],
      roundStatus: roundStatus,
      roundStatusColor:
        roundStatusColorsByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      roundStatusDisplay:
        roundStatusDisplaysByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      status,
    };
  }

  if (status === "COMPLETED") {
    const roundDisplays = ["R4"];
    const roundStatuses = ["COMPLETE", "OFFICIAL"];
    const roundStatus =
      roundStatuses[Math.floor(Math.random() * roundStatuses.length)];
    return {
      roundDisplay:
        roundDisplays[Math.floor(Math.random() * roundDisplays.length)],
      roundStatus: roundStatus,
      roundStatusColor:
        roundStatusColorsByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      roundStatusDisplay:
        roundStatusDisplaysByStatus[
          roundStatus as keyof typeof roundStatusColorsByStatus
        ],
      status,
    };
  }

  throw new Error("Invalid tournament status");
}
