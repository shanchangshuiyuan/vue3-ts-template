import request from "../../utils/request";
import type { loginForm, loginResponseData, userResponseData } from "./type";

//统一管理接口
enum API {
  LOGIN_API = "/user/login",
  USERINFO_URL = "/user/info",
}
//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) => {
  request.post<any, loginResponseData>(API.LOGIN_API, data);
};

export const reqUserInfo = () => {
  request.get<any, userResponseData>(API.USERINFO_URL);
};
