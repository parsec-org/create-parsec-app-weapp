# parsec - weapp

这里应该是你的项目介绍信息

## 开始使用

在克隆完项目之后，开始进行项目的依赖安装：



```shell

# 进入项目根目录
$ cd app

# 使用 yarn 安装依赖
$ yarn

# OR 使用 npm 安装依赖
$ npm install

# OR 使用 pnpm 安装依赖
$ pnpm install

# OR 使用 cnpm 安装依赖
$ cnpm install


```
## 编译运行

使用 Taro 的 build 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

Taro 编译分为 dev 和 build 模式：

*  **dev 模式（增加 --watch 参数）** 将会监听文件修改。
*  **build 模式（去掉 --watch 参数）** 将不会监听文件修改，并会对代码进行压缩打包。
*  dev 模式生成的文件较大，设置环境变量 NODE_ENV 为 production 可以开启压缩，方便预览，但编译速度会下降。


### 微信小程序

#### 编译命令


```shell

# yarn
$ yarn dev:weapp
$ yarn build:weapp

# npm script
$ npm run dev:weapp
$ npm run build:weapp

# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp

# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # CMD
$ NODE_ENV=production taro build --type weapp --watch # Bash

```


#### 小程序开发者工具

下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择项目根目录进行预览。

需要注意开发者工具的项目设置:

* 需要设置关闭 ES6 转 ES5 功能，开启可能报错
* 需要设置关闭上传代码时样式自动补全，开启可能报错
* 需要设置关闭代码压缩上传，开启可能报错


更多编译运行说明文档，请点击[这里](https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C)


## UI 库

[@antmjs/vantui](https://antmjs.github.io/vantui/main/#/home)


