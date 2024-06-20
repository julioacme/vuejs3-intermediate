<template>
  <div class="relative border rounded mb-4 shadow appearance-none label-floating">
    <label
      :for="fieldId"
      class="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal"
    >
      <span v-if="emptyValue && !error" >{{ label }}</span><span v-if="error" class="text-red-600">{{ error }}</span>
    </label>
    <input
      @input="emitChange"
      class="w-full py-2 px-3 text-gray-700 leading-normal rounded"
      :id="fieldId"
      :name="fieldId"
      :type="type"
      :placeholder="!error ? placeholder : ''"
      :value="value"
      :autocomplete="fieldId"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: 'label' },
    type: { type: String, default: 'type' },
    fieldId: { type: String, default: 'fieldId' },
    placeholder: { type: String, default: 'placeholder' },
    value: { type: [String, Number], default: 'value' },
    error: { type: String, default: 'error' },
  },
  computed: {
    emptyValue() {
      return this.value || this.value === 0 ? true : false
    },
  },
  methods: {
    emitChange(e) {
      this.$emit('inputChanged', { field: this.fieldId, value: e.target.value })
    },
  },
};
</script>
