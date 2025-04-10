import { useState } from "react";
import { PageLayout } from "@components/page-layout";
import { LeaderboardSearchBar } from "@features/leaderboard/search-bar";
import { LeaderboardTableAllPlayersHeader } from "@features/leaderboard/table/all-players-header";
import { LeaderboardTableHeader } from "@features/leaderboard/table/table-header";
import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { CompetitionHeader } from "./header";
import { CompetitionTable } from "./leaderboard/table";

export function CompetitionPage() {
  const params = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  return (
    <PageLayout title="Putting Pals" largeHeader>
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
