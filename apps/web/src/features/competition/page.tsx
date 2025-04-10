import type { RefresherEventDetail } from "@ionic/react";
import { useState } from "react";
import { PageLayout } from "@components/page-layout";
import { LeaderboardSearchBar } from "@features/leaderboard/search-bar";
import { LeaderboardTableAllPlayersHeader } from "@features/leaderboard/table/all-players-header";
import { LeaderboardTableHeader } from "@features/leaderboard/table/table-header";
import { IonList, IonRefresher, IonRefresherContent } from "@ionic/react";
import { api } from "@providers/trpc-provider";
import { useParams } from "react-router-dom";

import { CompetitionHeader } from "./header";
import { CompetitionTable } from "./leaderboard/table";

export function CompetitionPage() {
  const params = useParams<{ id: string }>();

  const { refetch: refetchTournament } =
    api.tournament.getByCompetitionId.useQuery({
      id: params.id,
    });
  const { refetch: refetchCompetition } = api.competition.getById.useQuery({
    id: params.id,
  });

  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  async function handleRefresh(eventDetail: RefresherEventDetail) {
    await Promise.all([refetchTournament(), refetchCompetition()]);
    eventDetail.complete();
  }

  return (
    <PageLayout title="Putting Pals" largeHeader>
      <IonRefresher
        slot="fixed"
        onIonRefresh={(event) => handleRefresh(event.detail)}
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList lines="none">
        <CompetitionHeader id={params.id} />
        <LeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <LeaderboardTableAllPlayersHeader />
        <LeaderboardTableHeader id={params.id} />
        <CompetitionTable id={params.id} searchQuery={searchQuery} />
      </IonList>
    </PageLayout>
  );
}
