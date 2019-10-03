import axios from 'axios'
import { URL_API_BASE } from '../global/config'

export const apiGET = (url) => axios.get(`${URL_API_BASE}${url}`);