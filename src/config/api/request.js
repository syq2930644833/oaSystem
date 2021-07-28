import axios from "axios"
import { Message } from 'element-ui'
import { baseUrl, timeout } from './config'

const config = {
    // baseURL: (env  === 'development') ? baseUrl.dev : (env === 'test') ? baseUrl.test : baseUrl.pro,
    baseURL: baseUrl,
    timeout: timeout || 60 * 1000, // 超时
    withCredentials: true, // 跨域
}
const _axios = axios.create(config)

_axios.interceptors.request.use(  // 请求拦截器
    config => {  // 请求之前
        // Do something
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use( // 响应拦截器
    response => {
        if (response.data.code === 2000) {
            return response.data
        } else {
            const msg = response.data.errmsg || response.data.msg
            if (msg) Message.warning({
                message: msg
            })
        }
    },
    error => {
        // Do something with response error
        return Promise.reject(error)
    }
)

export default function request(method, url, query = {}, config = {}) {
    if (method == 'get') {
        config.params = query
    } else {
        config.data = query
    }
    return _axios({
        url,
        ...config,
        method
    })
}