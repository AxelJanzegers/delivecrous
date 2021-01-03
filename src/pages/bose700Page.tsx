import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const Bose700Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/bose700.jpg" />
        <h1> Headphones 700 </h1>
        <h3> 399.95€ </h3>
        <IonText class="IonTextStyle">
          Casque bose La nouvelle référence du constructeur américain, le Bose Headphones 700 est un casque proposant dix niveaux de réduction de bruit active. Elle s'applique à la musique mais aussi aux appels vocaux pour permettre des conversations plus claires.
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Bose700Page;