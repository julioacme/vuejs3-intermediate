<template>
  <div class="modal">
    <div class="modal-content space-y-2">
      <form
        @submit.prevent="submitQuantity"
        class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8"
        novalidate
      >
        <h2>¿Cuántas unidades deseas?</h2>
        <FormInput
          :value="quantity"
          :error="quantityError"
          field-id="quantityInput"
          type="number"
          @inputChanged="handleChanged" />
        <br>
        <button
          class="bg-black border border-solid border-black text-white py-2 px-4"
          type="submit" >
          Aceptar
        </button>
        <button
          @click="closeModal"
          class="bg-white border border-solid border-black text-black py-2 px-4" >
          Cancelar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput.vue'
import quantityValidator from '@/validators/quantityValidator'

export default {
  name: 'QuantityModal',
  components: {FormInput},
  emits: ['close', 'submit'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    quantityError() {
      return quantityValidator(this.quantity)
    },
  },
  methods: {
    handleChanged(newValue) {
      this.quantity = newValue.value
    },
    closeModal() {
      this.$emit('close')
    },
    submitQuantity() {
      if (this.quantityError === '') {
        this.$emit('submit', this.quantity)
        this.closeModal()
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
