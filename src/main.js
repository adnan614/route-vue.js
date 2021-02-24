import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from) {
    console.log(from);
    console.log(to);
    return {
      x: 0,
      y:0
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
