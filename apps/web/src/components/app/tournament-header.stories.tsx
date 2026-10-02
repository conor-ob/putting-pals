import type { Tournament } from "@providers/trpc/types";
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
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TheSentry.args = {
  tournament: {
    name: "The Sentry",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r016.png",
    },
    courses: [{ name: "Plantation Course at Kapalua" }],
  } as Tournament,
};

export const SonyOpenInHawaii: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

SonyOpenInHawaii.args = {
  tournament: {
    name: "Sony Open in Hawaii",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r006.png",
    },
    courses: [{ name: "Waialae Country Club" }],
  } as Tournament,
};

export const TheAmericanExpress: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TheAmericanExpress.args = {
  tournament: {
    name: "The American Express",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r002.png",
    },
    courses: [{ name: "Pete Dye Stadium Course" }],
  } as Tournament,
};

export const FarmersInsuranceOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

FarmersInsuranceOpen.args = {
  tournament: {
    name: "Farmers Insurance Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r004.png",
    },
    courses: [{ name: "Torrey Pines Golf Course (South Course)" }],
  } as Tournament,
};

export const PebbleBeachProAm: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

PebbleBeachProAm.args = {
  tournament: {
    name: "AT&T Pebble Beach Pro-Am",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r005.png",
    },
    courses: [{ name: "Pebble Beach Golf Links" }],
  } as Tournament,
};

export const WMPhoenixOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

WMPhoenixOpen.args = {
  tournament: {
    name: "WM Phoenix Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r003.png",
    },
    courses: [{ name: "TPC Scottsdale (Stadium Course)" }],
  } as Tournament,
};

export const MexicoOpenAtVidanta: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

MexicoOpenAtVidanta.args = {
  tournament: {
    name: "Mexico Open at Vidanta",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r540.png",
    },
    courses: [{ name: "VidantaWorld" }],
  } as Tournament,
};

export const CognizantClassicInThePalmBeaches: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

CognizantClassicInThePalmBeaches.args = {
  tournament: {
    name: "Cognizant Classic in The Palm Beaches",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r010.png",
    },
    courses: [{ name: "PGA National Resort (The Champion Course)" }],
  } as Tournament,
};

export const ArnoldPalmerInvitationalPresentedByMastercard: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

ArnoldPalmerInvitationalPresentedByMastercard.args = {
  tournament: {
    name: "Arnold Palmer Invitational presented by Mastercard",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r009.png",
    },
    courses: [{ name: "Arnold Palmer's Bay Hill Club & Lodge" }],
  } as Tournament,
};

export const PuertoRicoOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

PuertoRicoOpen.args = {
  tournament: {
    name: "Puerto Rico Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r483.png",
    },
    courses: [{ name: "Grand Reserve Golf Club" }],
  } as Tournament,
};

export const ThePLAYERSChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

ThePLAYERSChampionship.args = {
  tournament: {
    name: "THE PLAYERS Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r011.png",
    },
    courses: [{ name: "TPC Sawgrass (THE PLAYERS Stadium Course)" }],
  } as Tournament,
};

export const ValsparChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

ValsparChampionship.args = {
  tournament: {
    name: "Valspar Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r475.png",
    },
    courses: [{ name: "Innisbrook Resort (Copperhead Course)" }],
  } as Tournament,
};

export const TexasChildrensHoustonOpen: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TexasChildrensHoustonOpen.args = {
  tournament: {
    name: "Texas Children's Houston Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r020.png",
    },
    courses: [{ name: "Memorial Park Golf Course" }],
  } as Tournament,
};

export const ValeroTexasOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

ValeroTexasOpen.args = {
  tournament: {
    name: "Valero Texas Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r041.png",
    },
    courses: [{ name: "TPC San Antonio (Oaks Course)" }],
  } as Tournament,
};

export const MastersTournament: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

MastersTournament.args = {
  tournament: {
    name: "Masters Tournament",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r014.png",
    },
    courses: [{ name: "Augusta National Golf Club" }],
  } as Tournament,
};

export const RBCHeritage: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

RBCHeritage.args = {
  tournament: {
    name: "RBC Heritage",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r012.png",
    },
    courses: [{ name: "Harbour Town Golf Links" }],
  } as Tournament,
};

export const CoralesPuntacanaChampionship: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

CoralesPuntacanaChampionship.args = {
  tournament: {
    name: "Corales Puntacana Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r522.png",
    },
    courses: [{ name: "Puntacana Resort & Club (Corales Golf Course)" }],
  } as Tournament,
};

export const ZurichClassicOfNewOrleans: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

ZurichClassicOfNewOrleans.args = {
  tournament: {
    name: "Zurich Classic of New Orleans",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r018.png",
    },
    courses: [{ name: "TPC Louisiana" }],
  } as Tournament,
};

export const TheCJCupByronNelson: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TheCJCupByronNelson.args = {
  tournament: {
    name: "THE CJ CUP Byron Nelson",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r019.png",
    },
    courses: [{ name: "TPC Craig Ranch" }],
  } as Tournament,
};

export const WellsFargoChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

WellsFargoChampionship.args = {
  tournament: {
    name: "Wells Fargo Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r480.png",
    },
    courses: [{ name: "Quail Hollow Club" }],
  } as Tournament,
};

export const MyrtleBeachClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

MyrtleBeachClassic.args = {
  tournament: {
    name: "Myrtle Beach Classic",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r553.png",
    },
    courses: [{ name: "Dunes Golf and Beach Club" }],
  } as Tournament,
};

export const PGAChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

PGAChampionship.args = {
  tournament: {
    name: "PGA Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r033.png",
    },
    courses: [{ name: "Valhalla Golf Club" }],
  } as Tournament,
};

export const CharlesSchwabChallenge: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

CharlesSchwabChallenge.args = {
  tournament: {
    name: "Charles Schwab Challenge",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r021.png",
    },
    courses: [{ name: "Colonial Country Club" }],
  } as Tournament,
};

export const RBCCanadianOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

RBCCanadianOpen.args = {
  tournament: {
    name: "RBC Canadian Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r032.png",
    },
    courses: [{ name: "Hamilton Golf & Country Club" }],
  } as Tournament,
};

export const TheMemorialTournamentPresentedByWorkday: Story = (
  args: TournamentHeaderProps,
) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TheMemorialTournamentPresentedByWorkday.args = {
  tournament: {
    name: "the Memorial Tournament presented by Workday",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r023.png",
    },
    courses: [{ name: "Muirfield Village Golf Club" }],
  } as Tournament,
};

export const USOpen: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

USOpen.args = {
  tournament: {
    name: "U.S. Open",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r026.png",
    },
    courses: [{ name: "Pinehurst Resort & Country Club (Course No. 2)" }],
  } as Tournament,
};

export const TravelersChampionship: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

TravelersChampionship.args = {
  tournament: {
    name: "Travelers Championship",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r034.png",
    },
    courses: [{ name: "TPC River Highlands" }],
  } as Tournament,
};

export const RocketMortgageClassic: Story = (args: TournamentHeaderProps) => {
  return (
    <TournamentHeader
      {...args}
      tournament={{ ...args.tournament, ...generateRandomArgs() }}
    />
  );
};

RocketMortgageClassic.args = {
  tournament: {
    name: "Rocket Mortgage Classic",
    images: {
      logo: "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r524.png",
    },
    courses: [{ name: "Detroit Golf Club" }],
  } as Tournament,
};

function generateRandomArgs(): Pick<
  Tournament,
  "location" | "schedule" | "status"
> {
  const roundStatusColorsByStatus = {
    COMPLETE: "BLUE",
    GROUPINGS_OFFICIAL: "BLUE",
    IN_PROGRESS: "RED",
    OFFICIAL: "GREEN",
    SUSPENDED: "YELLOW",
    UPCOMING: "GRAY",
  } as const;
  const roundStatusDisplaysByStatus = {
    COMPLETE: "Complete",
    GROUPINGS_OFFICIAL: "Groupings Official",
    IN_PROGRESS: "In Progress",
    OFFICIAL: "Official",
    SUSPENDED: "Suspended",
    UPCOMING: "Upcoming",
  } as const;
  const optionsByTournamentStatus = {
    NOT_STARTED: {
      roundDisplays: ["R1"],
      roundStatuses: ["UPCOMING", "GROUPINGS_OFFICIAL"],
    },
    IN_PROGRESS: {
      roundDisplays: ["R1", "R2", "R3", "R4"],
      roundStatuses: ["COMPLETE", "IN_PROGRESS", "OFFICIAL", "SUSPENDED"],
    },
    COMPLETED: {
      roundDisplays: ["R4"],
      roundStatuses: ["COMPLETE", "OFFICIAL"],
    },
  } as const;

  const tournamentStatus = randomItem(
    Object.keys(optionsByTournamentStatus) as Array<
      keyof typeof optionsByTournamentStatus
    >,
  );
  const { roundDisplays, roundStatuses } =
    optionsByTournamentStatus[tournamentStatus];
  const roundStatus = randomItem(roundStatuses);

  return {
    location: {
      __typename: "Country",
      city: "",
      country: "",
      countryCode: "",
      displayLocation: "TBD",
    },
    schedule: {
      status: tournamentStatus,
      startDate: "",
      endDate: "",
      displayDate: "TBD",
    },
    status: {
      roundDisplay: randomItem(roundDisplays),
      roundStatus,
      roundStatusColor: roundStatusColorsByStatus[roundStatus],
      roundStatusDisplay: roundStatusDisplaysByStatus[roundStatus],
    },
  };
}

function randomItem<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)] as T;
}
