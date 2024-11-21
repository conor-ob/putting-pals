import { useRef } from "react";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonListHeader,
  IonModal,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";

import "./styles.css";

export function LeaderboardListHeader() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonListHeader>
      <IonLabel>All Players</IonLabel>
      <IonButton id="open-modal" expand="block">
        See All
      </IonButton>
      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={1}
        breakpoints={[0, 1]}
      >
        <div className="flex flex-col items-center px-4 py-8">
          <div className="text-lg font-bold leading-snug tracking-tight">
            Settings
          </div>
          <div className="w-full">Hello there</div>
          <IonRadioGroup value="custom-checked" className="w-full">
            <IonItem lines="full">
              <IonRadio value="start" justify="start">
                Packed at the Start of Line
              </IonRadio>
            </IonItem>
            <IonItem lines="full">
              <IonRadio value="end" justify="start">
                Packed at the Start of Line
              </IonRadio>
            </IonItem>
          </IonRadioGroup>
          <IonButton
            className="h-10 w-full"
            color="dark"
            shape="round"
            size="small"
            onClick={() => modal.current?.dismiss()}
          >
            Done
          </IonButton>
        </div>
      </IonModal>
    </IonListHeader>
  );
}
