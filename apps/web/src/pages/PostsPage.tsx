import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { api } from "../providers/trpc-provider";

export function PostsPage() {
  const { data } = api.posts.getAll.useQuery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="text-lg font-semibold leading-snug tracking-tight">
              Posts
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              <div className="text-4xl font-bold leading-snug tracking-tight">
                Posts
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {data?.posts.map((post) => (
            <IonItem key={post.id} routerLink={`/posts/${post.id}`}>
              {post.title}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
