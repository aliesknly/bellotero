import axios from 'axios'
import { URL_API_BASE } from '../helpers'

export const apiGET = (url) => axios.get(`${URL_API_BASE}${url}`)