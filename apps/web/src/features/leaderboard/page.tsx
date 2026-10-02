import { PageLayout } from "@components/page-layout";
import { IonList } from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { LeaderboardHeader } from "./header";
import { LeaderboardSearchBar } from "./search-bar";
import { LeaderboardTableAllPlayersHeader } from "./table/all-players-header";
import { LeaderboardTable } from "./table/table";
import { LeaderboardTableHeader } from "./table/table-header";

const tourCode = "pga";

export function LeaderboardPage() {
  const params = useParams<{ id?: string }>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  return (
    <PageLayout title="Leaderboard" largeHeader>
      <IonList lines="none">
        <LeaderboardHeader tourCode={tourCode} id={params.id} />
        <LeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <LeaderboardTableAllPlayersHeader />
        <LeaderboardTableHeader />
        <LeaderboardTable
          tourCode={tourCode}
          id={params.id}
          searchQuery={searchQuery}
        />
      </IonList>
    </PageLayout>
  );
}
