import Vue from 'vue'
import App from './App'
import alert from './ckAlert.js'

Vue.config.productionTip = false
Vue.prototype.alert = alert;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
