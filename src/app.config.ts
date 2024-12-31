import router from '../config/router';

const pages = Object.keys(router).map((x) => x.substring(1));

export default defineAppConfig({
  pages: [...pages],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
