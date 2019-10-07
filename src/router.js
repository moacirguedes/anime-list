import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Animes',
      component: () => import('./components/Animes.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('./components/Favorites.vue')
    }
  ]
})
