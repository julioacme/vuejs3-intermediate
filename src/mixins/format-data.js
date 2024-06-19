export const formatData = {
  methods: {
    toCurrency(value) {
      return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value)
    },
  },
}
