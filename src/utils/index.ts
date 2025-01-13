import Taro from '@tarojs/taro';

export const getAppHost = () => {
  let BASE_URL = process.env.TARO_APP_API_TRIAL;
  if (process.env.TARO_ENV === 'weapp' && __wxConfig.envVersion === 'release') {
    BASE_URL = process.env.TARO_APP_API;
  }
  console.log('BASE_URL:', BASE_URL);
  return BASE_URL;
};

/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  return currentPage.route;
};

export const pageToLogin = () => {
  let path = getCurrentPageUrl();
  if (!path?.includes('login')) {
    Taro.navigateTo({
      url: '/pages/login/index',
    });
  }
};

export const timeout = (time?: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, time ?? 3000);
  });
};

export const amountFormat = (
  amount: number,
  options?: {
    style: Intl.NumberFormatOptionsStyle | undefined;
    [key: string]: any;
  },
) => {
  try {
    const formatter = new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options,
    });
    return formatter.format(amount);
  } catch (e) {
    return amount.toFixed(2);
  }
};
