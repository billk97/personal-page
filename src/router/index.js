import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/routes/HomeRoute'),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/components/routes/AboutRoute'),
            meta: {
                title: 'About'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/routes/ProjectsRoute'),
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
            path: '/blog',
            name: 'blog',
            component: () => import('@/components/routes/AboutRoute'),
            meta: {
                title: 'Blogs'
            }
        }
    ]
})

export default router


