import React, { useCallback, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonListHeader, IonList, IonThumbnail, IonButton, IonModal, IonRefresher, IonRefresherContent, IonInput } from '@ionic/react';
import './Tab2.css';
import { Plugins } from "@capacitor/core";
import { checkbox, chevronDownCircleOutline } from 'ionicons/icons';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';
import { loadavg } from 'os';
import { RefresherEventDetail } from '@ionic/core';

const { Storage } = Plugins;
const checkboxList = [false, false, false, false, false, false, false, false];
let total = 0;
let found = true;
let found2 = false;
reloadPage();
reloadPage2();

export const CardExamples: React.FC = () => {
  recupInfos();
  const allo = useForceUpdate();
  const [showModal, setShowModal] = useState(false);

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

          {checkboxList[0] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/bose700.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> Headphones 700 </h3>
                <p> Les best </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[1] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/boseEarBudsQC.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> EarBuds QC </h3>
                <p> Tro bi1 </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[2] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/sonyXm4.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> Headphones XM4 </h3>
                <p> C'est pas mal en vrai </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[3] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/sonyEarBudsXm3.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> EarBuds XM3 </h3>
                <p> Faut les bonnes oreilles </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[4] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPodMax.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> AirPods Max </h3>
                <p> 629€ bro stop l'abus </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[5] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPodPro.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> AirPods Pro </h3>
                <p> du bon Apple </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[6] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/airPod.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> AirPods </h3>
                <p> tlm en a </p>
              </IonLabel>
            </IonItem>
          }

          {checkboxList[7] == true &&
            <IonItem class="IonItemStyle">
              <IonThumbnail slot="start">
                <img src="./assets/galaxyBuds.jpg" alt="" />
              </IonThumbnail>
              <IonLabel>
                <h3> GalaxyBuds </h3>
                <p> je les ai </p>
              </IonLabel>
            </IonItem>
          }

        </IonList>
        <IonButton onClick={allo}> test </IonButton>
        <IonLabel> Total du panier : {total} € </IonLabel>
        <IonModal isOpen={showModal}>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        <IonButton onClick={videPanier}> Vider le Panier </IonButton>

        <IonContent>
          <form>
            <IonList>
              <IonListHeader>
                <IonLabel> Indiquez nous l'endroit de livraison :)</IonLabel>
              </IonListHeader>
              <IonItem>
                <IonLabel>Adresse :</IonLabel>
                <IonInput required placeholder="Adresse"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Code Postal :</IonLabel>
                <IonInput type="number" required placeholder="Code Postal"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Ville :</IonLabel>
                <IonInput type="text" required placeholder="Ville"></IonInput>
              </IonItem>
            </IonList>
            <IonButton type="submit" href="tab1"> Envoyer </IonButton>
            <IonButton type="reset"> Annuler </IonButton>
          </form>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};


export default CardExamples;

async function recupInfos() {
  var result = false;
  var price = [399.95, 279.99, 349.99, 199.95, 629, 279, 179, 149];
  if ((await Storage.get({ key: 'p' })).value != null) {
    const temp = (await Storage.get({ key: 'p' }));
    const temp2 = JSON.parse(temp.value!);
    if (temp2 !== null) {
      total = 0;
      for (let i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i] != temp2[i]) {
          checkboxList[i] = temp2[i];
          result = true;
        }

        //Calcul du total
        if (checkboxList[i] == true) {
          total = total + price[i];
        }
      }

    }
  }
  console.log(checkboxList + ', ' + total);
  return result;
}

function videPanier() {
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i] == true) {
      checkboxList[i] = false;
    }
  }
  total = 0;
  console.log(checkboxList);
}

//create your forceUpdate hook
function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

function reloadPage() {
  if (found == false) {
    window.location.href = window.location.href;
    found = true;
    console.log('allo');
  }
}

function LoadOnce() {
  if (found2 == true) {
    window.location.href = window.location.href;
    found2 = false;
  }
}

function reloadPage2() {
  if (!localStorage.justOnce) {
    localStorage.setItem("justOnce", "true");
    window.location.reload();
  }
}

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    event.detail.complete();
  }, 2000);
  window.location.href = window.location.href;
}