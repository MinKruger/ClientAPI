import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home', 
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/Clients',
    name: 'Clients',
    component: () => import('../views/Client.vue')
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Sales',
    name: 'Sales',
    component: () => import('../views/Client.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router