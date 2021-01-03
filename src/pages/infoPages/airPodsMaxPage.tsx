import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import '../stylePage/infoPage.css';

const AirPodsMaxPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/airPodMax.jpg" />
        <h1> AirPods Max </h1>
        <h3> 629.00€ </h3>
        <IonText class="IonTextStyle">
        Haut de gamme et haute fidélité, le dernier-né de la gamme AirPods affiche un prix qui en fera ciller plus d’un, mais promet la simplicité et le confort d’utilisation des autres casques sans-fil d’Apple, avec un son hors norme.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default AirPodsMaxPage;