import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import PureVueChart from 'pure-vue-chart';

Vue.config.productionTip = false

Vue.use(PureVueChart);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
