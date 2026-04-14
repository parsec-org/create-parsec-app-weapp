export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/orders/index',
    'pages/profile/index',
    'pages/login/index'
  ],
  tabBar: {
    color: '#9ca3af',
    selectedColor: '#00C2A0',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: 'assets/images/tabbar/category.png',
        selectedIconPath: 'assets/images/tabbar/category-active.png'
      },
      {
        pagePath: 'pages/orders/index',
        text: '订单',
        iconPath: 'assets/images/tabbar/orders.png',
        selectedIconPath: 'assets/images/tabbar/orders-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/profile.png',
        selectedIconPath: 'assets/images/tabbar/profile-active.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    'scope.userLocation': {
      desc: '您的位置信息将用于知己小程序为您提供更精准的服务'
    }
  },
  requiredBackgroundModes: ['location'],
  lazyCodeLoading: 'requiredComponents',
  // 申明需要使用的地理位置相关接口
  requiredPrivateInfos: [
    'getLocation',
    'onLocationChange',
    'startLocationUpdateBackground',
    'chooseAddress'
  ]
})
