import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/single-product/:id',
      name: 'single-product',
      component: () => import('../views/Single-Product.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/ErrorPage.vue'),
    },
  ],
})

export default router
