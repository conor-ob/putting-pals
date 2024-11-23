import { useState } from "react";
import { PageLayout } from "@components/page-layout";
import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { PgaTourLeaderboardHeader } from "./header";
import { PgaTourLeaderboardSearchBar } from "./search-bar";
import { PgaTourLeaderboardTableAllPlayersHeader } from "./table/all-players-header";
import { PgaTourLeaderboardTable } from "./table/table";
import { PgaTourLeaderboardTableHeader } from "./table/table-header";

export function PgaTourLeaderboardPage() {
  const params = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  return (
    <PageLayout title="Leaderboard" largeHeader>
      <IonList lines="none">
        <PgaTourLeaderboardHeader id={params.id} />
        <PgaTourLeaderboardSearchBar onSearchQueryChange={setSearchQuery} />
        <PgaTourLeaderboardTableAllPlayersHeader />
        <PgaTourLeaderboardTableHeader id={params.id} />
        <PgaTourLeaderboardTable id={params.id} searchQuery={searchQuery} />
      </IonList>
    </PageLayout>
  );
}
