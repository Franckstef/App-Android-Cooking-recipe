<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
          <ion-title>{{this.route.params.id}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
      <ion-list>
        <br>
        <ion-row v-for="recette in this.recettes" :key="recette" @click="afficheRecette(recette.id)">
          <ion-avatar><img :src="recette.strMealThumb" /></ion-avatar>
          <ion-label class="ion-text-wrap">&emsp;{{ recette.strMeal }}</ion-label>
        </ion-row>
      </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonList,
  IonLabel,
  IonRow
 
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";



export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonRow,
    IonList
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
  },
   data() {
    return {
      recettes: [{}]
    };
  },
  ionViewDidEnter() {
    this.getJSON();
  },
  methods: {
    async getJSON() {
      let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.route.params.id}`;
      fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
          console.log(data);
          let temp: object[] = [];

          for(let i= 0; i < data.meals.length; i++) {
            temp.push({id:data.meals[i].idMeal, strMeal: data.meals[i].strMeal, strMealThumb: data.meals[i].strMealThumb})
          }
          this.recettes = temp;
          
        });
    },

      afficheRecette(id:number) {
        this.router.push('/DetailsRecette/' + String(id));
      }
 }

});


</script>

<style scoped>

*{
  --background: rgb(63, 62, 62);
}

ion-row {
  align-items: center;
}

ion-title {
  font-size: 1.5em;
  color: whitesmoke;
}

ion-content {
  --ion-font-family: 'Knewave', cursive;
}

ion-list{
  font-size: 1.3em;
  color: whitesmoke;
  background: rgb(63, 62, 62);
  justify-content: center;
}

</style>
