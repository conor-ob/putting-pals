import { useState } from "react";
import { PageLayout } from "@components/page-layout";
import { IonList, IonSearchbar } from "@ionic/react";
import { api } from "@providers/trpc-provider";
import { useParams } from "react-router-dom";

import { cn } from "@pkg/ui/cn";

import { PgaTourSettingsHeader } from "./components/settings-header";
import { PgaTourLeaderboardTable } from "./components/table";
import { PgaTourTournamentHeader } from "./components/tournament-header";

export function PgaTourLeaderboardPage() {
  const params = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  return (
    <PageLayout title="Leaderboard" largeHeader>
      <IonList lines="none">
        <PgaTourTournamentHeader id={params.id} />
        <IonSearchbar
          className="px-4"
          showCancelButton="focus"
          onIonInput={(e) => {
            const target = e.target;
            if (target.value) {
              setSearchQuery(target.value.toLowerCase());
            }
          }}
          onIonCancel={() => setSearchQuery(undefined)}
          onIonClear={() => setSearchQuery(undefined)}
        />

        <PgaTourSettingsHeader />
        <PgaTourLeaderboardHeader id={params.id} />
        <PgaTourLeaderboardTable id={params.id} searchQuery={searchQuery} />
      </IonList>
    </PageLayout>
  );
}

export function PgaTourLeaderboardHeader({ id }: { id?: string }) {
  const { data } = api.tournament.getById.useQuery({ id });

  return (
    <>
      <div className="flex w-full flex-row justify-between px-4 py-2 text-[#767676]">
        <div className="flex flex-row items-center">
          <div className="w-10 text-xs font-bold tracking-tighter">POS</div>
          <div className="me-2 w-8"></div>
          <div className="text-xs font-bold tracking-tighter">PLAYER</div>
        </div>
        <div className="flex flex-row">
          <div
            className={cn(
              "flex w-12 justify-center text-xs font-bold tracking-tighter",
            )}
          >
            TOT
          </div>
          <div className="flex w-10 justify-center text-xs font-bold tracking-tighter">
            THRU
          </div>
          <div className="flex w-8 justify-end text-xs font-bold tracking-tighter">
            {data?.roundDisplay ?? "RD"}
          </div>
        </div>
      </div>
      <div className="mx-4 h-0.5 bg-foreground"></div>
    </>
  );
}
