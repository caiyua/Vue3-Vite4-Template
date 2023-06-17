import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...publicRoutes, ...privateRoutes],
})

router.beforeEach((to, from, next) => {
	next()
})

export default router
