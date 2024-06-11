import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomeView'
import ErrorView from '../pages/ErrorView'
import SingleProduct from '../pages/SingleProduct.vue'

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/products', // products/{id}
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
    component: SingleProduct,
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
