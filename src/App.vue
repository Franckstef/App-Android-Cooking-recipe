<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list>
            <ion-list-header>Catégories</ion-list-header>
            <ion-menu-toggle>
              <br>
              <ion-row router-link="/HomePage/">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/home.svg"></ion-icon>&emsp;Accueil</ion-label>
              </ion-row>
              <ion-row router-link="/CategorieRecettes/Chicken">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/drumstick-bite.svg"></ion-icon>&emsp;Poulets</ion-label>
              </ion-row>
              <ion-row router-link="/CategorieRecettes/Seafood">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/fish-fins.svg"></ion-icon>&emsp;Fruits de mer</ion-label>
              </ion-row>
              <ion-row router-link="/CategorieRecettes/Vegetarian">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/carrot.svg"></ion-icon>&emsp;Végétarien</ion-label>
              </ion-row>
              <ion-row router-link="/CategorieRecettes/Dessert">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/cake-candles.svg"></ion-icon>&emsp;Dessert</ion-label>
              </ion-row>
              <ion-row router-link="/CategorieRecettes/Breakfast">
                <ion-label>&emsp;<ion-icon slot="start" src="/assets/icon/cafe.svg"></ion-icon>&emsp;Petit-Déjeuner</ion-label>
              </ion-row>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>
<script lang="ts">

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonIcon,
  IonRow
} from "@ionic/vue";

import { defineComponent } from "vue";
// Importer les icones
import { logoTux } from "ionicons/icons";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonIcon,
    IonRow
  },
  setup() {
    return {
      logoTux,
    };
  },
});
</script>

<style scoped>

ion-content {
  --ion-font-family: 'Knewave', cursive;
  --background: rgb(63, 62, 62);
}

ion-list-header {
  font-size: 1.5em;
  color: whitesmoke;
}

ion-list{
  font-size: 1.5em;
  color: whitesmoke;
  background: rgb(63, 62, 62);
  text-align: center;
}

</style>