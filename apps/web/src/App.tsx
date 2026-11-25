import { DEFAULT_TOUR_CODE } from "@constants/tour";
import { LeaderboardPage } from "@features/leaderboard/leaderboard-page";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { TrpcProvider } from "@providers/trpc/trpc-provider";
import { Navigate, Route, useParams } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* import '@ionic/react/css/palettes/dark.always.css'; */
// import "@ionic/react/css/palettes/dark.class.css";
import "@ionic/react/css/palettes/dark.system.css";
/* Theme variables */
import "@theme/variables.css";
// UI variables
import "@theme/globals.css";

setupIonicReact({ mode: "ios" });

const TourRedirect: React.FC = () => {
  const { tour } = useParams<{ tour: string }>();
  return <Navigate to={`/${tour}/leaderboard`} replace />;
};

const App: React.FC = () => (
  <IonApp>
    <TrpcProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/"
              element={
                <Navigate to={`/${DEFAULT_TOUR_CODE}/leaderboard`} replace />
              }
            />
            <Route path="/:tour" element={<TourRedirect />} />
            <Route
              path="/:tour/leaderboard/:id?"
              element={<LeaderboardPage />}
            />
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </TrpcProvider>
  </IonApp>
);

export default App;
