import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { PageLayout } from "../../../components/page-layout";
import { PuttingPalsTournamentHeader } from "./components/tournament-header";

export function PuttingPalsLeaderboardPage() {
  const params = useParams<{ id: string }>();
  return (
    <PageLayout title="Putting Pals" largeHeader>
      <IonList lines="none">
        <PuttingPalsTournamentHeader id={params.id} />
      </IonList>
    </PageLayout>
  );
}
