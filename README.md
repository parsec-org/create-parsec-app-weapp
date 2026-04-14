# Parsec WeApp 小程序

基于 [Taro 4](https://docs.taro.zone/docs/) + [React 18](https://18.react.dev/) + [NutUI](https://nutui.jd.com/taro/react/3x/#/zh-CN/guide/start-react) 的多端小程序模版项目。

模版中的代码都可以作为学习参考，欢迎大家使用和贡献！如果你有任何问题或建议，请随时提交 issue 或 pull request。

## 架构概览

```
┌─────────────────────────────────────────────────────────────────────┐
│                           构建系统                                   │
│  Taro CLI 4.1.11 → Webpack 5 → Babel → PostCSS → Tailwind CSS v4   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                         应用入口层                                   │
│  app.tsx (App组件) → ConfigProvider (NutUI) → app.scss (全局样式)   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                          路由层                                      │
│          app.config.ts → TabBar (4个) + LoginPage                   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                          页面层                                      │
│  IndexPage → CategoryPage → OrdersPage → ProfilePage → LoginPage   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                         UI 组件层                                    │
│        NutUI React Taro 3.x + Tailwind CSS v4 样式                  │
└─────────────────────────────────────────────────────────────────────┘
```

## 技术栈

- **框架**: Taro 4.1.11
- **UI 库**: React 18.3.1
- **组件库**: NutUI React Taro 3.x
- **样式方案**: Sass + Tailwind CSS v4
- **语言**: TypeScript 5.x
- **构建工具**: Webpack 5

## 项目结构

```
├── config/              # 编译配置
│   ├── index.ts         # 主配置
│   ├── dev.ts           # 开发环境配置
│   └── prod.ts          # 生产环境配置
├── src/                 # 源代码
│   ├── app.tsx          # 入口组件
│   ├── app.config.ts    # 全局配置（路由、TabBar、权限）
│   ├── app.scss         # 全局样式 + Tailwind 主题
│   ├── assets/          # 静态资源
│   │   └── images/tabbar/  # TabBar 图标
│   └── pages/           # 页面目录
│       ├── index/       # 首页
│       ├── category/    # 分类页
│       ├── orders/      # 订单页
│       ├── profile/     # 个人中心
│       └── login/       # 登录页
├── types/               # 类型声明
│   └── global.d.ts      # 全局类型声明
└── dist/                # 构建产物
```

## 页面结构

### TabBar 页面

| 页面 | 路径                   | 说明                         |
| ---- | ---------------------- | ---------------------------- |
| 首页 | `pages/index/index`    | 应用主页，展示轮播、功能入口 |
| 分类 | `pages/category/index` | SideBar 侧边栏分类导航       |
| 订单 | `pages/orders/index`   | 订单管理页面                 |
| 我的 | `pages/profile/index`  | 个人中心页面                 |

### 非 TabBar 页面

| 页面 | 路径                | 说明                 |
| ---- | ------------------- | -------------------- |
| 登录 | `pages/login/index` | 微信登录、手机号授权 |

## 特色功能

### 小程序热更新

自动检测新版本并提示用户更新：

```typescript
// src/app.tsx
if (process.env.TARO_ENV === 'weapp') {
  const updateManager = Taro.getUpdateManager()
  updateManager.onUpdateReady(() => {
    // 提示用户重启应用
    updateManager.applyUpdate()
  })
}
```

### 国际化配置

NutUI 组件默认使用中文语言包：

```typescript
// src/app.tsx
return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
```

## 路径别名

项目配置了以下路径别名，方便模块引用：

| 别名           | 路径           |
| -------------- | -------------- |
| `@/config`     | src/config     |
| `@/utils`      | src/utils      |
| `@/components` | src/components |
| `@/assets`     | src/assets     |
| `@/pages`      | src/pages      |
| `@/services`   | src/services   |

使用示例：

```typescript
import { api } from '@/services/request'
import { formatTime } from '@/utils/helper'
import Header from '@/components/Header'
```

## 开发指南

### 环境要求

- Node.js >= 18
- pnpm >= 8
- 微信开发者工具（用于小程序预览和调试）

### 开发工具配置

1. 安装依赖后，运行 `pnpm dev:weapp` 启动开发模式
2. 打开微信开发者工具，导入项目根目录
3. 项目配置文件：`project.config.json`
4. 构建产物目录：`dist/`

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 微信小程序
pnpm dev:weapp

# H5
pnpm dev:h5

# 支付宝小程序
pnpm dev:alipay

# 抖音小程序
pnpm dev:tt

# 其他平台
pnpm dev:swan      # 百度小程序
pnpm dev:qq        # QQ 小程序
pnpm dev:jd        # 京东小程序
pnpm dev:quickapp  # 快应用
```

### 构建命令

```bash
# 微信小程序
pnpm build:weapp

# H5
pnpm build:h5

# 其他平台同开发命令，将 dev 改为 build
```

### 代码规范

```bash
# 检查代码规范
pnpm lint

# 自动修复代码问题
pnpm lint:fix

# 格式化代码
pnpm format

# 检查代码格式
pnpm format:check
```

## Git 规范

### 提交信息格式

```
<type>: <subject>
```

### Type 类型

| 类型     | 说明                       |
| -------- | -------------------------- |
| feat     | 新功能                     |
| fix      | 修复 bug                   |
| docs     | 文档变更                   |
| style    | 代码格式（不影响代码运行） |
| refactor | 重构                       |
| perf     | 性能优化                   |
| test     | 测试相关                   |
| chore    | 构建/工具变动              |
| revert   | 回退                       |
| build    | 打包                       |

### 示例

```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复页面样式问题"
git commit -m "docs: 更新 README"
```

## 多端支持

| 平台         | 命令              | 状态 |
| ------------ | ----------------- | ---- |
| 微信小程序   | `pnpm dev:weapp`  | ✅   |
| H5           | `pnpm dev:h5`     | ✅   |
| 支付宝小程序 | `pnpm dev:alipay` | ✅   |
| 抖音小程序   | `pnpm dev:tt`     | ✅   |
| 百度小程序   | `pnpm dev:swan`   | ✅   |
| QQ 小程序    | `pnpm dev:qq`     | ✅   |
| 京东小程序   | `pnpm dev:jd`     | ✅   |

## 部署说明

### 微信小程序发布

1. 修改 `config/prod.ts` 中的生产环境配置（API 地址等）
2. 执行构建命令：
   ```bash
   pnpm build:weapp
   ```
3. 打开微信开发者工具，导入 `dist` 目录
4. 点击「上传」按钮，填写版本号和备注
5. 登录微信公众平台，提交审核

### 版本号规范

遵循语义化版本号 `MAJOR.MINOR.PATCH`：

- **MAJOR**: 重大版本更新，不兼容的 API 变更
- **MINOR**: 新增功能，向下兼容
- **PATCH**: Bug 修复，向下兼容

## 配置说明

### 小程序 AppID

修改 `project.config.json` 中的 `appid` 字段：

```json
{
  "appid": "your-app-id"
}
```

### 设计稿尺寸

当前配置为 375px 设计稿，如需修改请编辑 `config/index.ts`：

```typescript
designWidth: 375,
deviceRatio: {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2,
  375: 2 / 1,
}
```

## NutUI 使用

### 组件导入

```tsx
// 组件从主入口导入（babel-plugin-import 自动处理按需加载）
import { Button, Dialog } from '@nutui/nutui-react-taro'

// 工具函数从 utils 导入
import { harmony, web, miniprogram, pxTransform } from '@nutui/nutui-react-taro/dist/es/utils'
```

### 平台判断

```tsx
import { harmony, web, miniprogram } from '@nutui/nutui-react-taro/dist/es/utils'

if (harmony()) {
  // 鸿蒙环境
} else if (web()) {
  // H5 环境
} else if (miniprogram()) {
  // 小程序环境
}
```

## Tailwind CSS 使用

项目已集成 Tailwind CSS v4 + weapp-tailwindcss，可与 NutUI 组件库并行使用，完美支持小程序环境。

### 基本使用

```tsx
import { View, Text } from '@tarojs/components'

function Demo() {
  return (
    <View className="flex flex-col items-center p-4 bg-blue-100 rounded-lg">
      <Text className="text-lg font-bold text-blue-600">标题</Text>
      <Text className="text-sm text-gray-500 mt-2">描述文字</Text>
    </View>
  )
}
```

### 与 NutUI 组件混用

Tailwind 类名可直接应用于 NutUI 组件：

```tsx
import { View } from '@tarojs/components'
import { Button, Cell } from '@nutui/nutui-react-taro'

function Demo() {
  return (
    <View className="p-4">
      {/* NutUI 组件 + Tailwind 类名 */}
      <Button type="primary" className="mt-4 w-full">
        提交
      </Button>

      <Cell className="bg-gray-50 rounded-lg mt-2">
        <View className="flex items-center">
          <Text className="text-gray-700">内容</Text>
        </View>
      </Cell>
    </View>
  )
}
```

### 主题配置

Tailwind CSS v4 使用 `@theme` 指令进行主题配置，编辑 `src/app.scss`：

```scss
/* Tailwind CSS v4 */
@import 'weapp-tailwindcss';

/* Tailwind CSS v4 主题配置 */
@theme {
  /* 自定义颜色 */
  --color-primary: #00c2a0;
  --color-warning: #faad14;

  /* 小程序兼容：使用 rpx 单位 */
  --spacing-1: 2rpx;
  --spacing-2: 4rpx;
  --spacing-3: 6rpx;
  --spacing-4: 8rpx;
}

:root {
  page {
    /* NutUI 主题变量 */
    --nutui-color-primary: #00c2a0;
  }
}
```

### 常用工具类

| 类别 | 示例                                                   |
| ---- | ------------------------------------------------------ |
| 布局 | `flex`, `flex-col`, `items-center`, `justify-between`  |
| 间距 | `p-4`, `m-2`, `mt-4`, `px-6`, `py-2`                   |
| 尺寸 | `w-full`, `h-screen`, `w-1/2`                          |
| 文字 | `text-lg`, `text-center`, `font-bold`, `text-gray-500` |
| 背景 | `bg-white`, `bg-blue-100`, `bg-gray-50`                |
| 边框 | `border`, `border-gray-200`, `rounded-lg`              |

### 注意事项

1. **类名冲突**: NutUI 使用 `nut-` 前缀，与 Tailwind 类名不会冲突
2. **rpx 单位**: 通过 `weapp-tailwindcss` 插件，rem 会自动转换为 rpx
3. **小程序兼容**: 使用 `weapp-tailwindcss` 解决 Tailwind v4 的小程序兼容问题
