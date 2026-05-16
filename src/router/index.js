import { createRouter, createWebHistory } from 'vue-router'
import BreedsView from '../pages/BreedsView.vue'
import BreedDetailView from '../pages/BreedDetailView.vue'

const routes = [
  { path: '/', name: 'Breeds', component: BreedsView },
  { path: '/breed/:breedName', name: 'BreedDetail', component: BreedDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router