import axios from 'axios'
import {getToken} from "./auth";

const instance = axios.create({
    baseURL: "http://localhost:3000", timeout: 5000
})

/*get请求*/
export function get(url, params) {
    return instance.get(url, {params})
}

/*post请求*/
export function post(url, params) {
    return instance.post(url, params)
}

/*put请求*/
export function put(url, data) {
    return instance.post(url, data)
}

/*del请求*/
export function del(url) {
    return instance.delete(url)
}

/*全局请求和全局相应拦截*/
instance.interceptors.request.use(function (config) {
    // 加上token
    config.headers['authorization'] = 'Bearer' + getToken()
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})