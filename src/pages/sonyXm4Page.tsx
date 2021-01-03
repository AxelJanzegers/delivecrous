import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const SonyXm4Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/sonyXm4.jpg" />
        <h1> Sony Xm4 </h1>
        <h3> 349.99€ </h3>
        <IonText class="IonTextStyle">
        Le Sony WH-1000XM4, nouveau fleuron de la marque japonaise, est un casque à réduction de bruit active. Ce modèle Bluetooth haut de gamme se pilote au travers de commandes tactiles.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default SonyXm4Page;