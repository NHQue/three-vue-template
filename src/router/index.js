import { createRouter, createWebHistory } from 'vue-router'
import Home from       '../views/Home.vue'
import ThreeCubeView from '../views/ThreeCubeView.vue'
import ThreeViewportView from '../views/ThreeViewportView.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/cube',
		name: 'ThreeCubeView',
		component: ThreeCubeView
	},
	{
		path: '/viewport',
		name: 'ThreeViewportView',
		component: ThreeViewportView
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
