import type { Meta, StoryObj } from "@storybook/react";

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
  tournamentName: "The Sentry",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r016.png",
  courses: [{ courseName: "Plantation Course at Kapalua" }],
};

export const SonyOpenInHawaii: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

SonyOpenInHawaii.args = {
  tournamentName: "Sony Open in Hawaii",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r006.png",
  courses: [{ courseName: "Waialae Country Club" }],
};

export const TheAmericanExpress: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheAmericanExpress.args = {
  tournamentName: "The American Express",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r002.png",
  courses: [{ courseName: "Pete Dye Stadium Course" }],
};

export const FarmersInsuranceOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

FarmersInsuranceOpen.args = {
  tournamentName: "Farmers Insurance Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r004.png",
  courses: [{ courseName: "Torrey Pines Golf Course (South Course)" }],
};

export const PebbleBeachProAm: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PebbleBeachProAm.args = {
  tournamentName: "AT&T Pebble Beach Pro-Am",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r005.png",
  courses: [{ courseName: "Pebble Beach Golf Links" }],
};

export const WMPhoenixOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

WMPhoenixOpen.args = {
  tournamentName: "WM Phoenix Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r003.png",
  courses: [{ courseName: "TPC Scottsdale (Stadium Course)" }],
};

export const MexicoOpenAtVidanta: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MexicoOpenAtVidanta.args = {
  tournamentName: "Mexico Open at Vidanta",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r540.png",
  courses: [{ courseName: "VidantaWorld" }],
};

export const CognizantClassicInThePalmBeaches: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CognizantClassicInThePalmBeaches.args = {
  tournamentName: "Cognizant Classic in The Palm Beaches",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r010.png",
  courses: [{ courseName: "PGA National Resort (The Champion Course)" }],
};

export const ArnoldPalmerInvitationalPresentedByMastercard: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ArnoldPalmerInvitationalPresentedByMastercard.args = {
  tournamentName: "Arnold Palmer Invitational presented by Mastercard",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r009.png",
  courses: [{ courseName: "Arnold Palmer's Bay Hill Club & Lodge" }],
};

export const PuertoRicoOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PuertoRicoOpen.args = {
  tournamentName: "Puerto Rico Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r483.png",
  courses: [{ courseName: "Grand Reserve Golf Club" }],
};

export const ThePLAYERSChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ThePLAYERSChampionship.args = {
  tournamentName: "THE PLAYERS Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r011.png",
  courses: [{ courseName: "TPC Sawgrass (THE PLAYERS Stadium Course)" }],
};

export const ValsparChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ValsparChampionship.args = {
  tournamentName: "Valspar Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r475.png",
  courses: [{ courseName: "Innisbrook Resort (Copperhead Course)" }],
};

export const TexasChildrensHoustonOpen: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TexasChildrensHoustonOpen.args = {
  tournamentName: "Texas Children's Houston Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r020.png",
  courses: [{ courseName: "Memorial Park Golf Course" }],
};

export const ValeroTexasOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ValeroTexasOpen.args = {
  tournamentName: "Valero Texas Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r041.png",
  courses: [{ courseName: "TPC San Antonio (Oaks Course)" }],
};

export const MastersTournament: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MastersTournament.args = {
  tournamentName: "Masters Tournament",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r014.png",
  courses: [{ courseName: "Augusta National Golf Club" }],
};

export const RBCHeritage: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RBCHeritage.args = {
  tournamentName: "RBC Heritage",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r012.png",
  courses: [{ courseName: "Harbour Town Golf Links" }],
};

export const CoralesPuntacanaChampionship: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CoralesPuntacanaChampionship.args = {
  tournamentName: "Corales Puntacana Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r522.png",
  courses: [{ courseName: "Puntacana Resort & Club (Corales Golf Course)" }],
};

export const ZurichClassicOfNewOrleans: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

ZurichClassicOfNewOrleans.args = {
  tournamentName: "Zurich Classic of New Orleans",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r018.png",
  courses: [{ courseName: "TPC Louisiana" }],
};

export const TheCJCupByronNelson: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheCJCupByronNelson.args = {
  tournamentName: "THE CJ CUP Byron Nelson",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r019.png",
  courses: [{ courseName: "TPC Craig Ranch" }],
};

export const WellsFargoChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

WellsFargoChampionship.args = {
  tournamentName: "Wells Fargo Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r480.png",
  courses: [{ courseName: "Quail Hollow Club" }],
};

export const MyrtleBeachClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

MyrtleBeachClassic.args = {
  tournamentName: "Myrtle Beach Classic",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r553.png",
  courses: [{ courseName: "Dunes Golf and Beach Club" }],
};

export const PGAChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

PGAChampionship.args = {
  tournamentName: "PGA Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r033.png",
  courses: [{ courseName: "Valhalla Golf Club" }],
};

export const CharlesSchwabChallenge: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

CharlesSchwabChallenge.args = {
  tournamentName: "Charles Schwab Challenge",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r021.png",
  courses: [{ courseName: "Colonial Country Club" }],
};

export const RBCCanadianOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RBCCanadianOpen.args = {
  tournamentName: "RBC Canadian Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r032.png",
  courses: [{ courseName: "Hamilton Golf & Country Club" }],
};

export const TheMemorialTournamentPresentedByWorkday: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TheMemorialTournamentPresentedByWorkday.args = {
  tournamentName: "the Memorial Tournament presented by Workday",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r023.png",
  courses: [{ courseName: "Muirfield Village Golf Club" }],
};

export const USOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

USOpen.args = {
  tournamentName: "U.S. Open",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r026.png",
  courses: [{ courseName: "Pinehurst Resort & Country Club (Course No. 2)" }],
};

export const TravelersChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

TravelersChampionship.args = {
  tournamentName: "Travelers Championship",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r034.png",
  courses: [{ courseName: "TPC River Highlands" }],
};

export const RocketMortgageClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader {...generateRandomArgs()} {...args}></TournamentHeader>
  );
};

RocketMortgageClassic.args = {
  tournamentName: "Rocket Mortgage Classic",
  tournamentLogo:
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r524.png",
  courses: [{ courseName: "Detroit Golf Club" }],
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

  const tournamentStatus =
    tournamentStatuses[Math.floor(Math.random() * tournamentStatuses.length)];

  if (tournamentStatus === "NOT_STARTED") {
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
      tournamentStatus,
    };
  }

  if (tournamentStatus === "IN_PROGRESS") {
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
      tournamentStatus,
    };
  }

  if (tournamentStatus === "COMPLETED") {
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
      tournamentStatus,
    };
  }

  throw new Error("Invalid tournament status");
}
