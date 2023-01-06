import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CategorieRecettes from '../views/CategorieRecettes.vue'
import DetailsRecette from '../views/DetailsRecette.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/CategorieRecettes/:id',
    name: 'CategorieRecettes',
    component: CategorieRecettes
  },
  {
    path: '/DetailsRecette/:id',
    name: 'DetailsRecette',
    component: DetailsRecette
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
