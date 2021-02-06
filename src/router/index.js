import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'base',
            component: () => import('@/components/About'),
            meta: {
                title: 'Vasileis Konstantinou'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/About'),
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '/utils',
            name: 'utils',
            component: () => import('@/components/Encrypt'),
            meta: {
                title: 'Utilities'
            }
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import('@/components/About'),
            meta: {
                title: 'Blogs'
            }
        }
    ]
})

export default router


