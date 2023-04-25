import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = `${process.env.APP_URL}/api`

export const axiosClassic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const instanceAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instanceAPI.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

instanceAPI.interceptors.response.use((config) => config)
