import router from '../config/router';

const pages = Object.keys(router).map((x) => x.substring(1));

export default defineAppConfig({
  pages: [...pages],
  tabBar: {
    color: '#686868',
    selectedColor: '#7c3aed',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-active.png',
      },
      {
        pagePath: 'pages/store/index',
        text: '商城',
        iconPath: 'assets/images/tabbar/store.png',
        selectedIconPath: 'assets/images/tabbar/store-active.png',
      },
      {
        pagePath: 'pages/orders/index',
        text: '订单',

        iconPath: 'assets/images/tabbar/orders.png',
        selectedIconPath: 'assets/images/tabbar/orders-active.png',
      },
      {
        pagePath: 'pages/me/index',
        text: '关于',
        iconPath: 'assets/images/tabbar/me.png',
        selectedIconPath: 'assets/images/tabbar/me-active.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  lazyCodeLoading: 'requiredComponents',
});
