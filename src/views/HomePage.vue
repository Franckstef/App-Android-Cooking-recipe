<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-buttons>
        <ion-title>Recette du jour</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-img :src="this.imageSrc" id="img"></ion-img>
      <ion-list>
        <ion-item-group>
          <ion-label id="plat" class="ion-text-wrap">{{ this.meals }}</ion-label>
          <ion-label class="info">Origine: {{ this.origine }}</ion-label>
          <ion-label class="info">Category: {{ this.category }}</ion-label>
        </ion-item-group>
      </ion-list>

      <ion-accordion-group>
        <ion-accordion value="colors">
          <ion-item class="info2" slot="header">
            <ion-label >Ingrédients</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ul v-for="ingredient in ingredients" :key="ingredient">
              <li id="ingred"> {{ ingredient }}</li>
            </ul>
          </ion-list>
        </ion-accordion>
      </ion-accordion-group>

      <ion-accordion-group>
        <ion-accordion value="colors">
          <ion-item class="info2" slot="header">
            <ion-label>Instructions</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-item>
              <ion-label id="instru" class="ion-text-wrap">{{ this.instructions }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-accordion>
      </ion-accordion-group>

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
  IonButtons,
  IonMenuButton,
  loadingController,
  IonAccordion,
  IonAccordionGroup,
  IonList

} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonAccordion,
    IonAccordionGroup,
    IonList

  },
  data() {
    return {
      imageSrc: "",
      meals: "",
      origine:"",
      category:"",
      instructions:"",
      ingredients: [{}],
    };
  },
  ionViewDidEnter() {
    console.log("Home page did Enter");
    this.getJSON();
  },
  methods: {
    async getJSON() {
      const loading = await loadingController.create({
        message: "Attendre SVP...",
      });
      await loading.present();
      
      let url = "https://www.themealdb.com/api/json/v1/1/random.php";
      fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
          console.log(data);
          let temp: string[] = [];

          this.meals = data.meals[0].strMeal;
          this.origine = data.meals[0].strArea;
          this.category = data.meals[0].strCategory;
          this.imageSrc = data.meals[0].strMealThumb;
          this.instructions = data.meals[0].strInstructions;

          for (let i = 1; i < 21; i++) {
            var mesure = data.meals[0][`strMeasure${i}`];
            var ingred = data.meals[0][`strIngredient${i}`];
              if (ingred.length > 0) {
                temp.push(mesure + " " + ingred);
                this.ingredients = temp;
              }
          }
         
          loading.dismiss();
        });
    },
  },
});
</script>

<style scoped>

*{
  background: grey;
  --background: grey;
}

ion-content {
  --ion-font-family: 'Knewave', cursive;
}

ion-img {
  margin: 8%;
  border-radius: 20%;
}

ion-title {
  font-size: 1.5em;
}

ul {
  margin: 8%;
}

#plat {
  text-align: center;
  font-size: 2em;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 5%;
}

.info {
  text-align: center;
  font-size: 1.1em;
  color: black;
  margin-bottom: 8%;
}

.info2 {
  text-align: center;
  font-size: 1.5em;
  margin-left: 8%;
  margin-right: 8%;
}

#ingred {
  margin-left: 8%;
  margin-right: 8%;
}

#instru {
  margin-left: 8%;
  margin-right: 8%;
}

</style>
