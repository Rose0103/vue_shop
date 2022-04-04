// 对axios二次封装
import axios from 'axios'
// 进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const service = axios.create({
    // 配置对象
    baseURL: "/api",
    // 超时时间
    timeout: 5000,   
})

// 请求拦截器
service.interceptors.request.use((config)=>{
    // config: 配置对象，可以设置请求头
    // 进度条开始动
    nprogress.start();
    return config;
})

//响应拦截器
service.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done()
    return res.data

}, (error) => {
    nprogress.done()
    return Promise.reject(new Error(error))
})

export default service;