import Vue from 'vue'
import App from './App.vue'
import {
    FormTextareaPlugin,
    ButtonPlugin,
    AlertPlugin,
    FormSelectPlugin,
    LayoutPlugin,
    NavbarPlugin,
    CardPlugin,
    ListGroupPlugin,
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '@/router'


Vue.use(FormTextareaPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CardPlugin)
Vue.use(ListGroupPlugin)
Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
