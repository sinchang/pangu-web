import Vue from 'vue'
import App from './components/App.vue'
import Copy from 'v-copy'

require('../node_modules/bulma/css/bulma.css')

Vue.use(Copy)

new Vue({
  el: '#app',
  render: h => h(App)
})
