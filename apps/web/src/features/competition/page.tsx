import { PageLayout } from "@components/page-layout";
import { IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { CompetitionHeader } from "./header";
import { CompetitionTable } from "./leaderboard/table";

export function CompetitionPage() {
  const params = useParams<{ id: string }>();
  return (
    <PageLayout title="Putting Pals" largeHeader>
      <IonList lines="none">
        <CompetitionHeader id={params.id} />
        <CompetitionTable id={params.id} />
      </IonList>
    </PageLayout>
  );
}
