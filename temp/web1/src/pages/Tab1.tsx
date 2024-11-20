import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { greeting } from "@pkg/utils/greeting";
import { sum } from "@pkg/utils/math";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center">
            <div>
              {greeting((import.meta.env.GIT_COMMIT_SHA as string).slice(0, 7))}
            </div>
            <div className="text-red">Red</div>
            <div className="text-green">Green</div>
            <div className="text-blue">Blue</div>
            <div className="text-yellow">Yellow</div>
            <div className="text-cyan">Cyan</div>
            <div className="text-purple">Purple</div>
            <div>{`The answer is ${sum(21, 21)}`}</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
