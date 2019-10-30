import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import VueNavigationBar from 'vue-navigation-bar'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Subscribe from './components/Subscribe.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.component("vue-navigation-bar", VueNavigationBar)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/subscribe', component: Subscribe }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
