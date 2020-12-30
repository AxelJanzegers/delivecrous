import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon, IonTabButton, IonButton} from '@ionic/react';
import './Tab3.css';
import { basket} from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle class="IonTitleStyle">DeliveYourMusic</IonTitle>
           <IonTabButton class="ButtonRight" href="#">
           <IonIcon icon={basket}/>
           </IonTabButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;