<template>
  <section v-if="!error" class="font-sans container m-auto text-center py-8">
    <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700">
      Clients Testimonials
    </label>
    <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">
      What our happy customers say about 1D Printer
    </h1>
    <hr class="border-b w-8 m-auto my-6" />

    <LoadingAnimation v-if="loading" />


    <div v-else class="flex flex-wrap justify-between items-start">
      <SingleTestimonial
        v-for="client in first4Testimonials"
        :key="client.id"
        :name="client.name"
        :picture="client.picture"
        :description="client.description" />
    </div>
  </section>
</template>

<script>
import { axiosMixin } from '@/mixins/axios-mixin'
import SingleTestimonial from '@/components/SingleTestimonial.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'
// Public testimonials data could be found at https://api.jsonbin.io/v3/b/665a1b85acd3cb34a850c5ab
// Private testimonials data could be found at https://api.jsonbin.io/v3/b/66689e3facd3cb34a8561cb4
// for private testimonials, axios config already has a valid token (src/plugins/axios.js)

export default {
  components: {
    SingleTestimonial,
    LoadingAnimation,
  },
  mixins: [axiosMixin],
  data() {
    return {
      clients: [],
      loading: true,
      error: false,
      arrayName: 'clients',
      endpoint: '/66689e3facd3cb34a8561cb4',
    }
  },
  async mounted() {
    // Look into src/mixins/axios-mixin.js how does fetchData is working
    await this.fetchData()
    this.loading = false
  },
  computed: {
    first4Testimonials() {
      return this.clients.filter((client, idx) => idx < 4)
    },
  },
}
</script>
