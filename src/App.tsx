import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { basket, headset } from 'ionicons/icons';
import HomePage from './pages/homePage';
import BasketPage from './pages/basketPage';
import Bose700Page from './pages/infoPages/bose700Page';
import BoseEarBudsQCPage from './pages/infoPages/boseEarbudsQCPage';
import AirPodsMaxPage from './pages/infoPages/airPodsMaxPage';
import AirPodsProPage from './pages/infoPages/airPodsProPage';
import AirPodsPage from './pages/infoPages/airPodsPage';
import SonyEarBudsXm3Page from './pages/infoPages/sonyEarBudsXm3Page';
import SonyXm4Page from './pages/infoPages/sonyXm4Page';
import GalaxyBudsPage from './pages/infoPages/galaxyBudsPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/homePage" component={HomePage} exact={true} />
          <Route path="/basketPage" component={BasketPage} exact={true} />
          <Route path="/bose700Page" component={Bose700Page} exact={true} />
          <Route path="/boseEarBudsQCPage" component={BoseEarBudsQCPage} exact={true} />
          <Route path="/airPodsMaxPage" component={AirPodsMaxPage} exact={true} />
          <Route path="/airPodsProPage" component={AirPodsProPage} exact={true} />
          <Route path="/airPodsPage" component={AirPodsPage} exact={true} />
          <Route path="/sonyEarBudsXm3Page" component={SonyEarBudsXm3Page} exact={true} />
          <Route path="/sonyXm4Page" component={SonyXm4Page} exact={true} />
          <Route path="/galaxyBudsPage" component={GalaxyBudsPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/homePage" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="homePage" href="/homePage">
            <IonIcon icon={headset} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="basketPage" href="/basketPage">
            <IonIcon icon={basket}/>
            <IonLabel>Panier</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
