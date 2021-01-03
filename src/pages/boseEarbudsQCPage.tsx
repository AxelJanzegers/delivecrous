import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText } from '@ionic/react';
import './Tab3.css';

const BoseEarBudsQCPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonImg src="./assets/boseEarBudsQC.jpg" />
        <h1> EarBuds QC </h1>
        <h3> 279.99€ </h3>
        <IonText class="IonTextStyle">
        Les Bose QuietComfort Earbuds sont les premiers écouteurs true wireless avec réduction de bruit active du constructeur américain. 
         </IonText>
      </IonContent>
    </IonPage>
  );
};

export default BoseEarBudsQCPage;