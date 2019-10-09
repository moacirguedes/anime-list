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
      component: () => import('./view/Animes.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('./view/Favorites.vue')
    },
    {
      path: '/:id',
      name: 'AnimePage',
      component: () => import('./view/AnimePage.vue')
    }
  ]
})
