import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from "vue-router";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
