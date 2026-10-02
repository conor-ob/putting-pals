import { PageLayout } from "@components/page-layout";
import { LeaderboardSearchBar } from "@features/leaderboard/search-bar";
import type { RefresherEventDetail } from "@ionic/react";
import { IonList, IonRefresher, IonRefresherContent } from "@ionic/react";
import { trpc } from "@providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { CompetitionHeader } from "./header";
import { CompetitionTable } from "./leaderboard/table";

const tourCode = "pal";

export function CompetitionPage() {
  const params = useParams<{ id?: string }>();

  const { refetch: refetchTournament } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode, id: params.id }),
  );
  const { refetch: refetchLeaderboard } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode, id: params.id }),
  );

  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  async function handleRefresh(eventDetail: RefresherEventDetail) {
    await Promise.all([refetchTournament(), refetchLeaderboard()]);
    eventDetail.complete();
  }

  return (
    <PageLayout title="Putting Pals TOUR" largeHeader>
      <IonRefresher
        slot="fixed"
        onIonRefresh={(event) => handleRefresh(event.detail)}
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList lines="none">
        <CompetitionHeader tourCode={tourCode} id={params.id} />
        <LeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <CompetitionTable
          tourCode={tourCode}
          id={params.id}
          searchQuery={searchQuery}
        />
      </IonList>
    </PageLayout>
  );
}
