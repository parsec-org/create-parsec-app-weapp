// 自定义页面路由
// 可以通过修改这个文件来自定义页面的路由
// key: 页面路径
// value: 自定义路由
// 例如：'/pages/index/index': '/'，表示将首页路径改为根路径
// 注意：自定义路由的页面必须在 app.config.ts 中 pages 字段中声明
// 文档：https://taro-docs.jd.com/docs/config-detail#h5routercustomroutes
const router = {
  // "页面路径": "自定义路由"
  '/pages/index/index': '/', // 首页
  '/pages/me/index': '/me', // 我的
};

export default router;
