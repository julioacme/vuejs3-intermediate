import axiosInstance from '@/plugins/axios'

export const axiosMixin = {
  methods: {
    async fetchData() {
      const response = await axiosInstance
      .get(this.endpoint)
      .catch((error) => {
        console.error('Error fetching data:', error)
        this.error = true
        return { data: { record: [] }}
      })

      this[this.arrayName] = response.data.record
    },
  },
}
