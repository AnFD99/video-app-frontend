import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = `${process.env.APP_URL}/api`

export const axiosClassic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

authInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// instance.interceptors.response.use((config) => {})
