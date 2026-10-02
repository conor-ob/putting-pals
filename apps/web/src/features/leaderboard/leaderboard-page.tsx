import { PageLayout } from "@components/page-layout";
import { DEFAULT_TOUR_CODE } from "@constants/tour";
import type { RefresherEventDetail } from "@ionic/react";
import { IonList, IonRefresher, IonRefresherContent } from "@ionic/react";
import type { TourCode } from "@providers/trpc/types";
import { trpc } from "@providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { LeaderboardHeader } from "./leaderboard-header";
import { LeaderboardSearchBar } from "./leaderboard-search-bar";
import { LeaderboardTable } from "./leaderboard-table";

export function LeaderboardPage() {
  const params = useParams<{ tour?: string; id?: string }>();
  const tourCode = (params.tour as TourCode) ?? DEFAULT_TOUR_CODE;
  const id = params.id;

  const tournament = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode, id }),
  );
  const leaderboard = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode, id }),
  );

  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  async function handleRefresh(eventDetail: RefresherEventDetail) {
    await Promise.all([tournament.refetch(), leaderboard.refetch()]);
    eventDetail.complete();
  }

  return (
    <PageLayout title="Leaderboard" largeHeader>
      <IonRefresher
        slot="fixed"
        onIonRefresh={(event) => handleRefresh(event.detail)}
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList lines="none">
        <LeaderboardHeader tournament={tournament.data} />
        <LeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <LeaderboardTable
          tourCode={tourCode}
          leaderboard={leaderboard.data}
          searchQuery={searchQuery}
        />
      </IonList>
    </PageLayout>
  );
}
