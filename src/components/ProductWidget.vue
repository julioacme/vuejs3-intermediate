<template>
  <section class="container max-w-xl m-auto my-8">
    <div
      :class="{ 'lg:flex-row-reverse': product.rightSidePicture }"
      class="font-sans flex flex-col
        lg:flex-row text-center lg:text-left sm:items-center"
    >
      <div class="w-full lg:w-1/2">
        <img class="m-auto" :src="`/img/products/${product.picture}`" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8
          items-center lg:items-start"
      >
        <label for="tagline" class="uppercase tracking-wide text-gray-700 font-bold">
          {{ product.name }}
        </label>
        <h1 class="my-4 font-normal">{{ toCurrency(product.price) }}</h1>
        <p v-if="product.description" class="leading-normal mb-4 text-gray-700">
          {{ product.description }}
        </p>
      </div>
    </div>

    <RouterLink v-if="showDetailsButton" :to="`products/${product.id}`">
      <button class="w-1/2 bg-white border border-solid border-black text-black py-2 px-4">
        Details
      </button>
    </RouterLink>
    <button
      @click="addToCart"
      class="w-1/2 bg-black border border-solid border-black text-white py-2 px-4"
    >
      Add to cart
    </button>

    <QuantityModal
      v-if="showModal"
      @close="showModal = false"
      @submit="handleQuantity" />
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { formatData } from '@/mixins/format-data'
import QuantityModal from '@/components/QuantityModal.vue'

export default {
  mixins: [formatData],
  props: {
    product: {
      type: Object,
      required: true,
    },
    showDetailsButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {QuantityModal},
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    ...mapMutations({
      addItemToCart: 'addItemToCart',
    }),
    addToCart() {
      this.showModal = true
    },
    handleQuantity(quantity) {
      this.addItemToCart({
        ...this.product,
        quantity: quantity,
      })
    },
  },
};
</script>
