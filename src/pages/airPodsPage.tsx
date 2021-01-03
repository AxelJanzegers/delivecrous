import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const AirPodsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/airPod.jpg" />
        <h1> AirPods </h1>
        <h3> 179.00€ </h3>
        <IonText class="IonTextStyle">
        Les AirPods (seconde génération) sont des écouteurs Bluetooth entièrement sans fil. Parfaitement intégrés à l'écosystème Apple, ils peuvent se connecter automatiquement à un iPhone, iPad ou Mac. Ils sont livrés au choix avec un boîtier de charge filaire ou sans-fil (compatible Qi) et un câble Lightning vers USB-type A.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default AirPodsPage;