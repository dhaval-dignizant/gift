import Vue from 'vue'
import App from './App.vue'
/* import VueRouter from 'vue-router'; */
import router from './router'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
/* import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue) */
/* import Bootstrap from 'bootstrap'; */


/*  import "./assets/css/bootstrap.min.css";  */
/* import "./assets/css/owl.carousel.min.css";  */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/assets/css/style.css"
import "@/assets/css/newstyle.css";
/* import "./assets/css/owl.carousel.min.css";
import "./assets/js/owl.carousel.min.js"; */

import 'owl.carousel/dist/assets/owl.carousel.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
/*   import "./assets/js/popper.min.js"; 
import "./assets/js/bootstrap.min.js";   */
import "@/assets/js/main.js";  



/* Vue.use(VueRouter); */

/* Vue.use(Bootstrap); */
/* import HomeComponent from '@/components/Home.vue';
import RelationComponent from '@/components/Relation.vue';
const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'relation',
    path: '/relation',
    component: RelationComponent
  },
  

]; */
Vue.config.productionTip = false


/* const router = new VueRouter({ mode: 'history', routes: routes }); */

/* new Vue(Vue.util.extend({ router }, App)).$mount('#app'); */
/* new Vue({
  render: h => h(App),
  router
}).$mount('#app') */
new Vue({ el: '#app', router, render: h => h(App) })
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

/* old code */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false */

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */
