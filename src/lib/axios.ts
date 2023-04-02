import axios from 'axios'

export const app = axios({
  baseURL: import.meta.env.SERVER_URL,
})
