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
import { Redirect, Route } from "react-router";

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

const App: React.FC = () => (
  <IonApp>
    <TrpcProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to={`/${DEFAULT_TOUR_CODE}/leaderboard`} />
            </Route>
            <Route
              exact
              path="/:tour"
              render={({ match }) => (
                <Redirect to={`/${match.params.tour}/leaderboard`} />
              )}
            />
            <Route
              exact
              path="/:tour/leaderboard/:id?"
              component={LeaderboardPage}
            />
          </IonRouterOutlet>
          {/* <IonTabBar slot="bottom">
            <IonTabButton tab="putting-pals" href="/putting-pals">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Putting Pals</IonLabel>
            </IonTabButton>
            <IonTabButton tab="pga-tour" href="/pga-tour">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>PGA Tour</IonLabel>
            </IonTabButton>
          </IonTabBar> */}
        </IonTabs>
      </IonReactRouter>
    </TrpcProvider>
  </IonApp>
);

export default App;
