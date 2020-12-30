import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonRouterLink} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle class="IonTitleStyle">DeliveYourMusic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/bose700.jpg" alt="" />
                <IonRouterLink href="tab3"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Bose Headphones 700</IonCardSubtitle>
                  <IonCardTitle> 399.95 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Casque bluetooth Bose à réduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/boseEarBudsQC.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Bose EarBuds QC</IonCardSubtitle>
                  <IonCardTitle> 279.99 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs bluetooth intra-auriculaires Bose à reduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/sonyXm4.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Sony Headphones XM4</IonCardSubtitle>
                  <IonCardTitle> 349.99 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Casque bluetooth Sony à réduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/sonyEarBudsXm3.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Sony EarBuds XM3</IonCardSubtitle>
                  <IonCardTitle> 199.95 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs bluetooth intra-auriculaires Sony à reduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/airPodMax.jpg" alt="" />
                <IonRouterLink href="#" class="IonRonterLinkStyle"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> AirPods Max</IonCardSubtitle>
                  <IonCardTitle> 629.00 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Casque bluetooth Apple à réduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/airPodPro.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> AirPods Pro</IonCardSubtitle>
                  <IonCardTitle> 279.00 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs bluetooth intra-auriculaires Apple à reduction de bruit active
            </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/airPod.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> AirPods</IonCardSubtitle>
                  <IonCardTitle> 179.00 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs bluetooth Apple
            </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard class="IonCardStyle">
                <img src="./assets/galaxyBuds.jpg" alt="" />
                <IonRouterLink href="#"> View </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Galaxy Buds</IonCardSubtitle>
                  <IonCardTitle> 149.00 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs intra-auriculaires Samasung
            </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
