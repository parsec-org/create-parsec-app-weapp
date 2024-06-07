import Taro from "@tarojs/taro";
import {TOKEN} from '@/config/constants';
import { stringify } from 'qs';
import {getAppHost, pageToLogin} from "@/utils/index";

const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

const customInterceptor = (chain) => {

  const requestParams = chain.requestParams;

  return chain.proceed(requestParams).then(async res => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      await Taro.showToast({
        title: '对不起！你访问的资源不存在。',
        icon: 'none',
      })
      return Promise.reject("对不起！你访问的资源不存在。");

    } else if (res.statusCode === HTTP_STATUS.CLIENT_ERROR) {
      await Taro.showToast({
        title: res.data.message,
        icon: 'none',
      })
      return Promise.reject(res.data.message)
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY || res.statusCode === HTTP_STATUS.SERVER_ERROR) {
      await Taro.showToast({
        title: '服务器异常，请稍候访问...',
        icon: 'none',
      });
      return Promise.reject("服务器异常，请稍候访问...")
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      await Taro.removeStorage({ key: TOKEN });
      await Taro.showToast({
        title: '没有权限访问',
        icon: 'none'
      });
      pageToLogin();
      return Promise.reject("没有权限访问");

    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      await Taro.removeStorage({ key: TOKEN });
      await Taro.showToast({
        title: '授权信息已过期，请重新授权。',
        icon: 'none'
      });
      pageToLogin();
      return Promise.reject("授权信息已过期，请重新授权。")

    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      const token = res.header['token'];
      if (token) {
        // 更新 token
        await Taro.setStorage({ key: TOKEN, data: token })
      }
      return res.data
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor];

interceptors.forEach(i => Taro.addInterceptor(i));


const request = function <T>(url: string, options: { data?: { [key: string]: any }; params?: { [key: string]: any }; header?: TaroGeneral.IAnyObject; method?: "GET" | "POST" | "DELETE" | "PUT", [key: string]: any } = {}) {
  let { params, data, header = {}, method = 'GET' } = options;
  const BASE_URL = getAppHost();
  let _url = `${BASE_URL}${url}`
  let contentType: string = "application/json";
  contentType = header.contentType || contentType;
  params = {
    ...params,
    // _: dayjs().millisecond()
  }
  if (method.toLocaleUpperCase() === 'GET') {
    _url = `${_url}?${stringify(params)}`
  }
  const option = {
    url: _url,
    data: data,
    method: method,
    header: {
      'content-type': contentType,
      'Authorization': `Bearer ${Taro.getStorageSync(TOKEN)}`
    }
  } as any;
  return Taro.request(option) as any as Promise<T>;
}

export default request;
