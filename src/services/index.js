import axios from 'axios'
import { getBaseApiUrl } from '../../env'

const http = axios.create({
  baseURL: getBaseApiUrl(),
  timeout: 12000,
  headers: {},
})

http.interceptors.request.use()
http.interceptors.response.use()

export default http
