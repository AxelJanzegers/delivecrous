import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonRouterLink, IonIcon, IonCheckbox } from '@ionic/react';
import './stylePage/homePage.css';
import { eye } from 'ionicons/icons';
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;
const checkboxList = [false, false, false, false, false, false, false, false];

const HomePage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="IonToolBarStyle">
          <IonTitle class="IonTitleStyle"> DeliveYourMusic </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard class="IonCardStyle">
              <IonCheckbox color="secondary" onIonChange= {e => { check(0) }}/>
                <img src="./assets/bose700.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="bose700Page">
                  <IonIcon class="IonIconStyle" icon={eye} />
                Fiche Produit
                 </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(1) }}/>
                <img src="./assets/boseEarBudsQC.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="boseEarBudsQCPage">
                  <IonIcon class="IonIconStyle" icon={eye} />
                Fiche Produit
                 </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(2) }}/>
                <img src="./assets/sonyXm4.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="sonyXm4Page">
                  <IonIcon class="IonIconStyle" icon={eye} />
                Fiche Produit
                </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(3) }}/>
                <img src="./assets/sonyEarBudsXm3.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="sonyEarBudsXm3Page">
                  <IonIcon class="IonIconStyle" icon={eye} />
                Fiche Produit
                 </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(4) }}/>
                <img src="./assets/airPodMax.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="airPodsMaxPage">
                  <IonIcon class="IonIconStyle" icon={eye} />
                Fiche Produit
                </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(5) }} />
                <img src="./assets/airPodPro.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="airPodsProPage">
                  <IonIcon class="IonIconStyle" icon={eye} />
                 Fiche Produit
                  </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(6) }} />
                <img src="./assets/airPod.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="airPodsPage">
                  <IonIcon class="IonIconStyle" icon={eye} />
                   Fiche Produit
                   </IonRouterLink>
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
              <IonCheckbox color="secondary" onIonChange= {e => { check(7) }} />
                <img src="./assets/galaxyBuds.jpg" alt="" />
                <IonRouterLink class="IonRouterLinkStyle" href="galaxyBudsPage">
                  <IonIcon class="IonIconStyle" icon={eye} />
                 Fiche Produit
                 </IonRouterLink>
                <IonCardHeader>
                  <IonCardSubtitle> Galaxy Buds</IonCardSubtitle>
                  <IonCardTitle> 149.00 €</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Écouteurs intra-auriculaires Samsung
            </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};


export default HomePage;

async function check(id : number) {
  if(checkboxList[id] === false) {
    checkboxList[id] = true;
  }
  else {
    checkboxList[id] = false;
  }
  await Storage.set({key:'p', value: JSON.stringify(checkboxList)});
}