import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const GalaxyBudsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/galaxyBuds.jpg" />
        <h1> Galaxy Buds </h1>
        <h3> 149.00€ </h3>
        <IonText class="IonTextStyle">
        Les Samsung Galaxy Buds sont des écouteurs Bluetooth true wireless. Leur étui peut se recharger sans fil, notamment via la nouvelle fonctionnalité de partage d'énergie du Galaxy S10.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default GalaxyBudsPage;