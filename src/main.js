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
    BadgePlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '@/router/index'
import VueI18n from 'vue-i18n'
import en from '@/locale/en'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'


Vue.use(FormTextareaPlugin)
Vue.use(ButtonPlugin)
Vue.use(AlertPlugin)
Vue.use(FormSelectPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(CardPlugin)
Vue.use(ListGroupPlugin)
Vue.use(VueI18n)
Vue.use(BadgePlugin)
Vue.use(VueDOMPurifyHTML)
VueMarkdownEditor.use(vuepressTheme, {Prism})
Vue.use(VueMarkdownEditor)

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
