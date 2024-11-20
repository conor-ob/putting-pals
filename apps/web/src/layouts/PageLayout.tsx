import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export function PageLayout({
  title,
  largeHeader = false,
  children,
}: {
  title: string;
  largeHeader?: boolean;
  children: React.ReactNode;
}) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {largeHeader && (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                <div className="text-4xl font-bold leading-snug tracking-tight">
                  {title}
                </div>
              </IonTitle>
            </IonToolbar>
          </IonHeader>
        )}
        {children}
      </IonContent>
    </IonPage>
  );
}
