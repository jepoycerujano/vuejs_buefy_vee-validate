import Vue from 'vue';
import Router from 'vue-router';
import Hauler from '@/components/Hauler';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [{
    path: '/hauler',
    name: 'Hauler',
    component: Hauler
  }, ]
});