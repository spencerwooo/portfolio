import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueNavigationBar from 'vue-navigation-bar'
import axios from 'axios'

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Social from './views/Social.vue'
import NotFound from './views/NotFound.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('vue-navigation-bar', VueNavigationBar)

// NProgress
import NProgress from 'nprogress'
import './assets/styles/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/social', component: Social },

    // Not found
    { path: '/*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name !== null) {
    NProgress.start()
  }
  next()
})
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})

Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
