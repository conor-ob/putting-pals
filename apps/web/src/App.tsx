import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, home, settings, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import ViewMessage from "./pages/ViewMessage";
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
import "./theme/variables.css";
// UI variables
import "@pkg/ui/globals.css";

import { PostPage } from "./pages/PostPage";
import { PostsPage } from "./pages/PostsPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { TrpcProvider } from "./providers/trpc-provider";

setupIonicReact({ mode: "ios" });

const App: React.FC = () => (
  <IonApp>
    <TrpcProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/message/:id">
              <ViewMessage />
            </Route>
            <Route exact path="/posts">
              <PostsPage />
            </Route>
            <Route path="/posts/:id" component={PostPage}></Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="posts" href="/posts">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Posts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon aria-hidden="true" icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </TrpcProvider>
  </IonApp>
);

export default App;
