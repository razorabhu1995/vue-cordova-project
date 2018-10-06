// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from 'vue-cordova'

Vue.config.productionTip = false

// cordova plugin for vuejs

Vue.use(VueCordova)

Vue.cordova.on('deviceready', () => {
  console.log('Cordova : device is ready !')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
