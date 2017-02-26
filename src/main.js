// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import Flag from 'vue-flag-icon'

Vue.use(BootstrapVue);
Vue.use(Flag);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
