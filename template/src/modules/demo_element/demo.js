import Vue from 'vue'
import { Button, Row } from 'element-ui'
import App from './App.vue'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button)
Vue.use(Row)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
