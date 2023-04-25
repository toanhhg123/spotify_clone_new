import axios from "axios";
import env from '../config/env'
const server = axios.create({
    baseURL: env.base_url,
    withCredentials: true,
})
export default server;