import type { ToggleCustomEvent } from "@ionic/react";
import { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  personCircle,
  personCircleOutline,
  sunny,
  sunnyOutline,
} from "ionicons/icons";

import "./variables.css";

export function SettingsPage() {
  const [paletteToggle, setPaletteToggle] = useState(false);

  // Listen for the toggle check/uncheck to toggle the dark palette
  const toggleChange = (ev: ToggleCustomEvent) => {
    setPaletteToggle(ev.detail.checked);
  };

  return (
    <IonPage className="settings-page">
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Display</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon
                slot="icon-only"
                ios={personCircleOutline}
                md={personCircle}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle
              checked={paletteToggle}
              onIonChange={toggleChange}
              justify="space-between"
            >
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>Text Size</IonItem>
          <IonItem>
            <IonToggle justify="space-between">Bold Text</IonToggle>
          </IonItem>
        </IonList>

        <IonListHeader>Brightness</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonRange value={40}>
              <IonIcon icon={sunnyOutline} slot="start"></IonIcon>
              <IonIcon icon={sunny} slot="end"></IonIcon>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonToggle justify="space-between" checked>
              True Tone
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>
            <IonLabel>Night Shift</IonLabel>
            <IonText slot="end" color="medium">
              9:00 PM to 8:00 AM
            </IonText>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>
            <IonLabel>App version</IonLabel>
            <IonText slot="end" color="medium">
              {(import.meta.env.GIT_COMMIT_SHA as string).slice(0, 7)}
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
