import { OddsPage } from "@features/odds/page";
import { IonApp, setupIonicReact } from "@ionic/react";
import { TrpcProvider } from "@providers/trpc-provider";

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
import "@pkg/ui/globals.css";

setupIonicReact({ mode: "ios" });

const App: React.FC = () => (
  <IonApp>
    <TrpcProvider>
      <OddsPage />
    </TrpcProvider>
  </IonApp>
);

export default App;

// import { CompetitionPage } from "@features/competition/page";
// import { LeaderboardPage } from "@features/leaderboard/page";
// import { OddsPage } from "@features/odds/page";
// import {
//   IonApp,
//   // IonIcon,
//   // IonLabel,
//   IonRouterOutlet,
//   // IonTabBar,
//   // IonTabButton,
//   IonTabs,
//   setupIonicReact,
// } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import { TrpcProvider } from "@providers/trpc-provider";
// // import { square, trophy } from "ionicons/icons";
// import { Redirect, Route } from "react-router-dom";

// /* Core CSS required for Ionic components to work properly */
// import "@ionic/react/css/core.css";
// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";
// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";
// /**
//  * Ionic Dark Mode
//  * -----------------------------------------------------
//  * For more info, please see:
//  * https://ionicframework.com/docs/theming/dark-mode
//  */
// /* import '@ionic/react/css/palettes/dark.always.css'; */
// // import "@ionic/react/css/palettes/dark.class.css";
// import "@ionic/react/css/palettes/dark.system.css";
// /* Theme variables */
// import "@theme/variables.css";
// // UI variables
// import "@pkg/ui/globals.css";

// setupIonicReact({ mode: "ios" });

// const App: React.FC = () => (
//   <IonApp>
//     <TrpcProvider>
//       <IonReactRouter>
//         <IonTabs>
//           <IonRouterOutlet>
//             <Route exact path="/">
//               <Redirect to="/putting-pals" />
//             </Route>
//             <Route exact path="/putting-pals">
//               <CompetitionPage />
//             </Route>
//             <Route exact path="/pga-tour">
//               <LeaderboardPage />
//             </Route>
//             <Route path="/putting-pals/:id" component={CompetitionPage} />
//             <Route path="/pga-tour/:id" component={LeaderboardPage} />
//             <Route path="/odds" component={OddsPage} />
//           </IonRouterOutlet>
//           {/* <IonTabBar slot="bottom">
//             <IonTabButton tab="putting-pals" href="/putting-pals">
//               <IonIcon aria-hidden="true" icon={square} />
//               <IonLabel>Putting Pals</IonLabel>
//             </IonTabButton>
//             <IonTabButton tab="pga-tour" href="/pga-tour">
//               <IonIcon aria-hidden="true" icon={square} />
//               <IonLabel>PGA Tour</IonLabel>
//             </IonTabButton>
//           </IonTabBar> */}
//         </IonTabs>
//       </IonReactRouter>
//     </TrpcProvider>
//   </IonApp>
// );

// export default App;
