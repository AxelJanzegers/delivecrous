import React, { useCallback, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonListHeader, IonList, IonThumbnail, IonButton, IonModal, IonInput, IonIcon, IonImg, IonText } from '@ionic/react';
import './stylePage/basketPage.css';
import { Plugins } from "@capacitor/core";
import { checkmarkCircle, trash} from 'ionicons/icons';

const { Storage } = Plugins;
const checkboxList = [false, false, false, false, false, false, false, false];
let total = 0;

export const BasketPage: React.FC = () => {
  recupInfos();
  const updateData = useForceUpdate();
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="IonTitleStyle">DeliveYourMusic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="IonContentStyle">
        <IonList>
          <IonButton color="secondary" class="IonButtonStyle2" onClick={updateData}> Rafraichir le panier pour l'affichage </IonButton>
          <IonListHeader class="IonListHeaderStyle"> Votre panier :</IonListHeader>

          {checkboxList[0] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/bose700.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> Headphones 700 </h2>
                <h3> 399.95 € </h3>
                <p> Le best </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem1}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[1] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/boseEarBudsQC.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> EarBuds QC </h2>
                <h3> 279.99 € </h3>
                <p> Tro bi1 </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem2}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[2] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/sonyXm4.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> Headphones XM4 </h2>
                <h3> 349.99 € </h3>
                <p> C'est pas mal en vrai </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem3}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[3] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/sonyEarBudsXm3.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> EarBuds XM3 </h2>
                <h3> 199.95 € </h3>
                <p> Faut les bonnes oreilles </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem4}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[4] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPodMax.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> AirPods Max </h2>
                <h3> 629.00 € </h3>
                <p> 629€ bro stop l'abus </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem5}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[5] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPodPro.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> AirPods Pro </h2>
                <h3> 279.00 € </h3>
                <p> du bon Apple </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem6}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[6] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPod.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> AirPods </h2>
                <h3> 179.00 € </h3>
                <p> tlm en a </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem7}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

          {checkboxList[7] === true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/galaxyBuds.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h2> GalaxyBuds </h2>
                <h3> 149.00 € </h3>
                <p> je les ai </p>
              </IonLabel>
              <IonButton color="md--ion-text-color" onClick={removeItem8}> <IonIcon class="IonIconStyle" icon={trash} slot="end" /> </IonButton>
            </IonItem>
          }

        </IonList>
        <IonLabel class="IonLabelStyle"> <h1>Total du panier : {total} € </h1> </IonLabel>
        <IonButton class="IonButtonStyle2" color="secondary" onClick={cleanBasket}> Vider tout le Panier </IonButton>
        <IonContent>
            <IonList>
              <IonListHeader>
                <IonLabel> Indiquez nous l'endroit de livraison :)</IonLabel>
              </IonListHeader>
              <IonItem>
                <IonLabel>Adresse :</IonLabel>
                <IonInput placeholder="Adresse"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Code Postal :</IonLabel>
                <IonInput type="number" placeholder="Code Postal"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Ville :</IonLabel>
                <IonInput type="text" placeholder="Ville"></IonInput>
              </IonItem>
            </IonList>
            <IonModal isOpen={showModal}>
              <IonContent class="IonContentStyle">
                <IonImg src="./assets/fun.jpg" />
                <IonIcon class="IonIconStyle2" icon={checkmarkCircle} />
                <h1> Votre commande a été expédiée</h1>
                <IonText class="IonTextStyle">
                  Profitez bien de l'écoute de votre musique :)
                  Merci pour votre achat et votre confiance !
                </IonText>
              </IonContent>
              <IonButton color="secondary" class="IonButtonStyle" onClick={send}> Accueil </IonButton>
            </IonModal>
            <IonButton class="IonButtonStyle2" color="secondary" onClick={() => setShowModal(true)}> Envoyer </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};


export default BasketPage;

async function recupInfos() {
  var result = false;
  var price = [399.95, 279.99, 349.99, 199.95, 629.00, 279.00, 179.00, 149.00];
  if ((await Storage.get({ key: 'p' })).value != null) {
    const temp = (await Storage.get({ key: 'p' }));
    const temp2 = JSON.parse(temp.value!);
    if (temp2 !== null) {
      total = 0;
      for (let i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i] !== temp2[i]) {
          checkboxList[i] = temp2[i];
          result = true;
        }
        if (checkboxList[i] === true) {
          total = total + price[i];
        }
      }
    }
  }
  return result;
}

async function cleanBasket() {
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i] === true) {
      checkboxList[i] = false;
    }
  }
  total = 0;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function cleanBasketNoRedirection() {
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i] === true) {
      checkboxList[i] = false;
    }
  }
  total = 0;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
}

// force la mise a jour des données
function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

function send() {
  cleanBasketNoRedirection();
  window.location.href = "/homePage";
}

async function removeItem1() {
  checkboxList[0] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem2() {
  checkboxList[1] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem3() {
  checkboxList[2] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem4() {
  checkboxList[3] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem5() {
  checkboxList[4] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem6() {
  checkboxList[5] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem7() {
  checkboxList[6] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}

async function removeItem8() {
  checkboxList[7] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(checkboxList) });
  window.location.href = "/basketPage";
}