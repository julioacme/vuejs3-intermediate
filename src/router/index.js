import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomeView'
import ErrorView from '../pages/ErrorView'

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/products',
  ERROR: '/404',
  THANKS: '/thanks',
}

const routes = [
  {
    path: pages.HOME,
    name: 'Home',
    component: HomeView,
  },
  {
    path: pages.CHECKOUT,
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../pages/CheckoutView.vue'),
  },
  {
    path: pages.PRODUCTS,
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../pages/ProductsView.vue'),
  },
  {
    path: `${pages.SINGLE_PRODUCT}/:id`,
    name: 'Product Detail',
    component: () => import(/* webpackChunkName: "single_product" */ '../pages/SingleProduct.vue'),
  },
  {
    path: pages.THANKS,
    name: 'Thank you',
    component: () => import(/* webpackChunkName: "thanks" */ '../pages/ThanksView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
