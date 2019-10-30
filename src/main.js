import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueNavigationBar from "vue-navigation-bar";

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.component("vue-navigation-bar", VueNavigationBar);

new Vue({
  render: h => h(App),
}).$mount('#app')
