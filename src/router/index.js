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
            component: () => import('@/components/routes/AboutRoute'),
            meta: {
                title: 'Vasileis Konstantinou'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/routes/AboutRoute'),
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '/utils/encrypt',
            name: 'encryption',
            component: () => import('@/components/routes/EncryptRoute'),
            meta: {
                title: 'encryption Utilities'
            }
        },
        {
            path: '/utils/jwt',
            name: 'jwt',
            component: () => import('@/components/routes/JwtRoute'),
            meta: {
                title: 'jwt Utilities'
            }
        },
        {
            path: '/utils/hash',
            name: 'hash',
            component: () => import('@/components/routes/HashRoute'),
            meta: {
                title: 'Hash Utilities'
            }
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import('@/components/routes/BlogsRoute'),
            meta: {
                title: 'Blogs'
            }
        },
        {
            path: '/blogs/admin',
            name: 'Blogs admin panel',
            component: () => import('@/components/routes/AdminBlock'),
            meta: {
                title: 'Blogs admin panel'
            }
        }
    ]
})

export default router


