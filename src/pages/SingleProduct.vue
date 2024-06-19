<template>
  <div class="container min-h-screen">
    <router-link to="/products">
      ← Back to Products
    </router-link>

    <LoadingAnimation v-if="loading" />

    <ProductWidget
      v-else-if="product"
      :product="product"
      :showDetailsButton="false"
    />

    <div v-if="!product">
      Product not found :(
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { axiosMixin } from '@/mixins/axios-mixin'
import ProductWidget from '@/components/ProductWidget.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {
  name: 'SingleProduct',
  components: {
    ProductWidget,
    LoadingAnimation,
  },
  mixins: [axiosMixin],
  data() {
    return {
      tempProducts: [],
      loading: true,
      arrayName: 'tempProducts',
      endpoint: '/666906c7acd3cb34a85644f1',
    }
  },
  async mounted() {
    if (!this.products.length) {
      await this.fetchData()
      this.setProducts(this.tempProducts)
      this.loading = false
    }
    this.loading = false;
  },
  computed: {
    ...mapState({
      products: 'products',
    }),
    ...mapGetters({
      productById: 'productById',
    }),
    product() {
      return this.productById(this.$route.params.id);
    },
  },
  methods: {
    ...mapMutations({
      setProducts: 'setProducts',
    })
  },
};
</script>
