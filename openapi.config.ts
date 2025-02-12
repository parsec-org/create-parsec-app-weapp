import { generateService } from '@umijs/openapi';

// 更多配置参数：https://github.com/chenshuai2144/openapi2typescript#%E5%8F%82%E6%95%B0
// 生成代码时需要 在本地开启 Apifox 工具
generateService({
  schemaPath: 'http://127.0.0.1:4523/export/openapi/2?version=openapi31', // openAPI 3.0 的地址,可以在 apifox中导出的时候复制地址栏的URL地址即可
  serversPath: './src/services', // 生成的文件夹的路径
  requestLibPath: 'import request from "../request";', //自定义请求方法路径
}).then((r) => {
  console.log('API 生成成功：', r);
});
