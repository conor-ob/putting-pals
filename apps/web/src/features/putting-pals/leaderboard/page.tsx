import { PageLayout } from "@components/page-layout";
import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { PuttingPalsLeaderboardHeader } from "./header";
import { PuttingPalsLeaderboardTable } from "./table/table";

export function PuttingPalsLeaderboardPage() {
  const params = useParams<{ id: string }>();
  return (
    <PageLayout title="Putting Pals" largeHeader>
      <IonList lines="none">
        <PuttingPalsLeaderboardHeader id={params.id} />
        <PuttingPalsLeaderboardTable id={params.id} />
      </IonList>
    </PageLayout>
  );
}
