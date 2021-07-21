import Vue from 'vue'
import App from '@/App.vue'
import {
    FormTextareaPlugin,
    ButtonPlugin,
    AlertPlugin,
    FormSelectPlugin,
    LayoutPlugin,
    NavbarPlugin,
    CardPlugin,
    ListGroupPlugin,
    BVToastPlugin,
    VBPopoverPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '@/router/index'
import VueI18n from 'vue-i18n'
import VueClipboard from 'vue-clipboard2'
import en from '@/locale/en'
import '@/styles/global.css'

Vue.use(BVToastPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CardPlugin)
Vue.use(ListGroupPlugin)
Vue.use(VueI18n)
Vue.use(VueClipboard)
Vue.use(VBPopoverPlugin)
Vue.config.productionTip = false



const messages = { en }
const i18n = new VueI18n({
    locale: 'en',
    messages
})

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
