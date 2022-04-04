import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 配置路由
const routes = [
    {
        path: "*",
        redirect: '/home',
    },
    {
        path: "/home",
        name: "Home",
        component: () => import('@/views/Home'),
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true }
    },
    {
        path: '/search/:keyWord',
        name: "Search",
        component: () => import('@/views/Search'),
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: "Login",
        component: () => import('@/views/Login'),
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: false }
    },
    {
        path: '/register',
        name: "Register",
        component: () => import('@/views/Register'),
        // 只有经过身份验证的用户才能创建帖子
        meta: { requiresAuth: false }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router;