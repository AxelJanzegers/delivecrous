import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import '../stylePage/infoPage.css';

const AirPodsProPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/airPodPro.jpg" />
        <h1> AirPods Pro </h1>
        <h3> 279.00€ </h3>
        <IonText class="IonTextStyle">
        Les AirPods Pro, d'Apple, sont des écouteurs true wireless intra-auriculaires dotés d’une réduction active du bruit. Ils sont livrés avec un boîtier de charge, rechargeable en filaire ou sans fil (compatible Qi).
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default AirPodsProPage;