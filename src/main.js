import Vue from 'vue'
import App from './App.vue'
import {
    FormTextareaPlugin,
    ButtonPlugin,
    AlertPlugin,
    FormSelectPlugin,
    LayoutPlugin,
    NavbarPlugin,
    CardPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(FormTextareaPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CardPlugin)
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
}).$mount('#app')
