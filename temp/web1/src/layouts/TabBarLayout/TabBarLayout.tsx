import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  apps,
  appsOutline,
  settings,
  settingsOutline,
  square,
  squareOutline,
  triangle,
  triangleOutline,
} from "ionicons/icons";
import { Redirect, Route, useLocation } from "react-router-dom";

import { PostPage } from "../../pages/PostPage";
import { PostsPage } from "../../pages/PostsPage";
import { SettingsPage } from "../../pages/SettingsPage/SettingsPage";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";

const tabs = [
  {
    tab: "tab1",
    href: "/tab1",
    label: "Tab 1",
    selectedIcon: triangle,
    unselectedIcon: triangleOutline,
  },
  {
    tab: "tab2",
    href: "/tab2",
    label: "Tab 2",
    selectedIcon: square,
    unselectedIcon: squareOutline,
  },
  {
    tab: "posts",
    href: "/posts",
    label: "Posts",
    selectedIcon: apps,
    unselectedIcon: appsOutline,
  },
  {
    tab: "settings",
    href: "/settings",
    label: "Settings",
    selectedIcon: settings,
    unselectedIcon: settingsOutline,
  },
];

export function TabBarLayout() {
  const location = useLocation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route exact path="/posts">
          <PostsPage />
        </Route>
        <Route path="/posts/:id" component={PostPage}></Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((tab) => (
          <IonTabButton key={tab.tab} tab={tab.tab} href={tab.href}>
            <IonIcon
              icon={
                location.pathname.startsWith(tab.href)
                  ? tab.selectedIcon
                  : tab.unselectedIcon
              }
            />
            <IonLabel>{tab.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
}
