import axios from 'axios';
import router from '../router';

const axiosHttp = axios.create({
  baseURL: 'http://localhost:3000',
  //baseURL: 'http://www.qubiancheng1024.com',
  timeout: 5000
})

// 添加请求拦截器
axiosHttp.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  var token = localStorage.getItem('token');
  if(token){
    config.headers.Authorization = token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosHttp.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.success == false){
    router.push('/login');
    return false;
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  if(error.response.status == '401'){
    router.push('/login');
  }
  return Promise.reject(error);
});

export default axiosHttp