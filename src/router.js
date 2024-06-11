import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './pages/HomeView'
import ProductsView from './pages/ProductsView'
import ErrorView from './pages/ErrorView'

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product', // product/{id}
  ERROR: '/404',
  THANKS: '/thanks',
};

const routes = [
  {
    path: pages.HOME,
    name: 'Home',
    component: HomeView,
  },
  {
    path: pages.CHECKOUT,
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ './pages/CheckoutView.vue'),
  },
  {
    path: pages.PRODUCTS,
    name: 'Products',
    component: ProductsView,
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
