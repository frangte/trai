import Vue from 'vue'

import './assets/styles/index.css';
import './components/editor/sass/main.scss';
import App from './App.vue';
import routes from './router';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
