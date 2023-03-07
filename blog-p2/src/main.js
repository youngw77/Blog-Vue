import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './vuex/store'
import initPosts from './modules/initPosts'
import axios from 'axios' //global, 전역

Vue.prototype.$axios = axios  // $axios 외부에서 불러올 이름

initPosts.test()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
