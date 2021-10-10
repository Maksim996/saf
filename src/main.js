import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
import { VueMaskDirective } from 'v-mask'
import '@/plugins/veevalidate';
// import '@/api/index'
import GlobalMixin from "@/mixins/GlobalMixin";

Vue.directive('mask', VueMaskDirective);
Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.mixin(GlobalMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
