import axios from 'axios'

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b',
  timeout: 5000,
})

// Agregar un interceptor para incluir el token en cada solicitud
axiosInstance.interceptors.request.use(
  config => {
    // Obtener el token de alguna fuente (localStorage, Vuex, etc.)
    // const token = localStorage.getItem('token'); // O de cualquier otra fuente donde guardes el token
    const token = '$2a$10$d2tiBxhzXIv91HJ9DtX.VuihcObZdpDX4OUwKOVGV0CS78J.H8zM.'

    if (token) {
      config.headers['X-Access-Key'] = `${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
