/*
 * 公共路由表
 * */

const publicRoutes = [
    { path: '/', name: 'login', component: () => import('@/views/login/index.vue') },
]

export default publicRoutes
