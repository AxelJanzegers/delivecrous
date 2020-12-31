import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonListHeader, IonList, IonThumbnail } from '@ionic/react';
import './Tab2.css';
export const CardExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="IonTitleStyle">DeliveYourMusic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader class="IonListHeaderStyle"> Votre panier :</IonListHeader>
          <IonItem class="IonItemStyle">
            <IonThumbnail slot="start">
              <img src="./assets/airPodMax.jpg" alt="" />
            </IonThumbnail>
            <IonLabel> casque AirPods Max </IonLabel>
          </IonItem>
          <IonItem class="IonItemStyle"> 
            <IonThumbnail slot="start">
              <img src="./assets/airPodPro.jpg" alt="" />
            </IonThumbnail>
            <IonLabel>
              <h3>écouteurs AirPods Pro</h3>
              <p> du bon Apple </p>
            </IonLabel>
          </IonItem>
        </IonList> 
      </IonContent>
    </IonPage>
  );
};


export default CardExamples;
