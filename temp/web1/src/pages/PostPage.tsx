import type { RouteComponentProps } from "react-router-dom";
import { IonItem, IonList } from "@ionic/react";

import { PageLayout } from "../layouts/PageLayout/PageLayout";
import { api } from "../providers/trpc-provider";

export function PostPage({
  match,
}: RouteComponentProps<{
  id: string;
}>) {
  const { data } = api.posts.getById.useQuery({ id: match.params.id });

  return (
    <PageLayout title={`Post ${match.params.id}`}>
      <IonList>
        <IonItem>{data?.body}</IonItem>
      </IonList>
    </PageLayout>
  );
}
