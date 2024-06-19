<template>
  <div
    v-if="itemsInCart.length"
    class="min-h-screen"
  >
    <CheckoutTable
      :itemsInCart="itemsInCart"
      @removeItemFromCart="removeFromCart"
    />

    <form
      @submit.prevent="submitOrder"
      class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8"
      novalidate
    >
      <FormInput
        :value="email"
        :error="emailError"
        field-id="email"
        placeholder="Email"
        label="Email"
        type="email"
        @inputChanged="handleChanged" />

      <FormInput
        :value="phone"
        :error="phoneError"
        field-id="phone"
        placeholder="Phone"
        label="Phone"
        type="tel"
        @inputChanged="handleChanged" />

      <div class="flex items-center justify-between">
        <button class="w-full bg-black hover:bg-black text-white py-2 px-4" type="submit">
          Buy
        </button>
      </div>
    </form>
  </div>
  <!-- empty cart message -->
  <div
    v-else
    class="min-h-screen">
    <h1 class="text-5xl">You don't have any items in your Cart :(</h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CheckoutTable from '@/components/CheckoutTable.vue'
import FormInput from '@/components/FormInput.vue'

import emailValidator from '@/validators/emailValidator'
import phoneValidator from '@/validators/phoneValidator'

export default {
  name: 'CheckoutView',
  components: {
    CheckoutTable,
    FormInput,
  },
  data() {
    return {
      email: '',
      phone: '',
      shouldValidate: false,
    }
  },
  computed: {
    ...mapState({
      itemsInCart: 'itemsInCart',
    }),
    phoneError() {
      return this.shouldValidate ? phoneValidator(this.phone) : ''
    },
    emailError() {
      return this.shouldValidate ? emailValidator(this.email) : ''
    },
    formIsValid() {
      return this.phoneError === '' && this.emailError === ''
    },
  },
  methods: {
    ...mapMutations({
      deleteItemFromCart: 'deleteItemFromCart',
    }),
    submitOrder() {
      this.shouldValidate = true
      if (this.formIsValid) {
        this.$router.push('/thanks')
      }
    },
    handleChanged(newValue) {
      this[newValue.field] = newValue.value
    },
    removeFromCart(itemId) {
      this.deleteItemFromCart(itemId)
    },
  },
};
</script>
