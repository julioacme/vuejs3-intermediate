<template>
  <div>
    <h1 class="text-center uppercase tracking-wide font-bold text-gray-700">
      Our 1D Printer Products
    </h1>
    <LoadingAnimation v-if="loading" />
    <ProductWidget
      v-for="product in productsWithAlignment"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { axiosMixin } from '@/mixins/axios-mixin'
import ProductWidget from '@/components/ProductWidget.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'
import { mapMutations } from 'vuex'
// Public testimonials data could be found at https://api.jsonbin.io/v3/b/665a1b62e41b4d34e4fc9376
// Private testimonials data could be found at https://api.jsonbin.io/v3/b/666906c7acd3cb34a85644f1
// for private testimonials, axios config already has a valid token (src/plugins/axios.js)

export default {
  components: {
    ProductWidget,
    LoadingAnimation,
  },
  mixins: [axiosMixin],
  data() {
    return {
      products: [],
      loading: true,
      error: false,
      arrayName: 'products',
      endpoint: '/666906c7acd3cb34a85644f1',
    }
  },
  async mounted() {
    // Look into src/mixins/axios-mixin.js how does fetchData is working
    await this.fetchData()
    this.setProducts(this.products)
    this.loading = false
  },
  computed: {
    productsWithAlignment() {
      return this.products.map((product, index) => {
        const rightAlignment = this.isOdd(index)

        return {
          ...product,
          rightAlignment,
        }
      })
    },
  },
  methods: {
    ...mapMutations({
      setProducts: 'setProducts'
    }),
    isOdd(index) {
      return index % 2 === 0
    }
  },
}
</script>
