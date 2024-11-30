import { useState } from "react";
import { PageLayout } from "@components/page-layout";
import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { LeaderboardHeader } from "./header";
import { LeaderboardSearchBar } from "./search-bar";
import { LeaderboardTableAllPlayersHeader } from "./table/all-players-header";
import { LeaderboardTable } from "./table/table";
import { LeaderboardTableHeader } from "./table/table-header";

export function LeaderboardPage() {
  const params = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  return (
    <PageLayout title="Leaderboard" largeHeader>
      <IonList lines="none">
        <LeaderboardHeader id={params.id} />
        <LeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <LeaderboardTableAllPlayersHeader />
        <LeaderboardTableHeader id={params.id} />
        <LeaderboardTable id={params.id} searchQuery={searchQuery} />
      </IonList>
    </PageLayout>
  );
}
