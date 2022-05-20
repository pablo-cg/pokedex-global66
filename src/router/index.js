import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemons',
      name: 'pokemon-list',
      component: ListView,
      children: [
        {
          path: '',
          redirect:{
            name: 'all-pokemons'
          },
        },
        {
          path: 'home',
          redirect:{
            name: 'home'
          },
        },
        {
          path: 'all',
          name: 'all-pokemons',
          component: () => import('../components/views/PokemonList.vue'),
        },
        {
          path: 'favorites',
          name: 'favorites-pokemons',
          component: () => import('../components/views/FavoritesList.vue'),
        },
      ],
    },
  ],
})

export default router
