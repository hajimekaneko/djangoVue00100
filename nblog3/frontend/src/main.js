import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fontqwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

// fontqwsome

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

Vue.prototype.$http = (url, opts) => fetch(url, opts)
Vue.prototype.$httpPosts = 'http://127.0.0.1:8000/blog/api/posts/'
Vue.prototype.$httpCategories = 'http://127.0.0.1:8000/blog/api/categories/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')