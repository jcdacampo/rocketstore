import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Celulares from '@/components/Celulares'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/celulares/',
      name: 'Celulares',
      component: Celulares
    }
  ]
})
