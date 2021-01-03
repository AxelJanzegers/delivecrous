import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const SonyEarBudsXm3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/sonyEarBudsXm3.jpg" />
        <h1> EarBuds XM3 </h1>
        <h3> 199.95€ </h3>
        <IonText class="IonTextStyle">
        Les Sony WF-1000XM3 sont des écouteurs intra-auriculaires true wireless. Ils intègrent une fonction de réduction de bruit et se contrôlent par commande tactile.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default SonyEarBudsXm3Page;