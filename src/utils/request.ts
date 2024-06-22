//进行axios的二次封装
import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  //基础路径会携带/api
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

//请求拦截器配置
request.interceptors.request.use(
  (config) => {
    //返回配置对象
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//响应拦截器配置
request.interceptors.response.use(
  (response) => {
    //返回响应数据
    return response.data;
  },
  (error) => {
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 400:
        message = "请求错误";
        break;
      case 401:
        message = "token过期或者没有登录";
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = "请求地址出错";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      default:
        message = "网络连接错误";
    }
    ElMessage({
      type: "error",
      message: message,
    });

    return Promise.reject(error);
  },
);

export default request;
