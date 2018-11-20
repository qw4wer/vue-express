import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import EasyUI from 'vx-easyui';
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import axios from 'axios'

Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(EasyUI);
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})
