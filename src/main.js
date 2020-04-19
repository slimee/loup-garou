import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import './registerServiceWorker'
import css from "./style.css"
import vuexRouterSync from './plugins/vuex-router-sync'
import vue2TouchEvents from './plugins/vue2-touch-events'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
