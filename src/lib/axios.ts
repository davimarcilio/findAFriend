import axios from 'axios'

export const app = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})
