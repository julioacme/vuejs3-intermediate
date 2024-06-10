import { createMemoryHistory, createRouter } from 'vue-router'

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product', // product/{id}
  ERROR: '/404',
  THANKS: '/thanks',
};

const routes = [
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
