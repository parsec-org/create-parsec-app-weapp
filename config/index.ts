import path from 'path'
import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack'
import devConfig from './dev'
import prodConfig from './prod'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'webpack5'>(async (merge, { command, mode }) => {
  console.log('command：', command)
  console.log('mode：', mode)
  const baseConfig: UserConfigExport<'webpack5'> = {
    projectName: 'weapp',
    date: '2026-3-28',
    designWidth: 375,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    // 开启 HTML 插件
    plugins: ['@tarojs/plugin-html'],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'react',
    compiler: {
      type: 'webpack5',
      prebundle: {
        enable: false
      }
    },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    // 配置全局 Scss 变量
    sass: {
      data: '@import "@nutui/nutui-react-taro/dist/styles/variables.scss";'
      // JMAPP 主题
      // data: `@import '@nutui/nutui-react-taro/dist/styles/variables-jmapp.scss';`
      // JRKF 主题
      // data: `@import '@nutui/nutui-react-taro/dist/styles/variables-jrkf.scss';`
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: ['nut-']
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
        // weapp-tailwindcss 插件：rem -> rpx 转换 + NutUI 兼容
        chain.merge({
          plugin: {
            'weapp-tailwindcss': {
              plugin: UnifiedWebpackPluginV5,
              args: [
                {
                  appType: 'taro',
                  rem2rpx: true,
                  // 解决 @tarojs/plugin-html 移除 Tailwind CSS 变量的问题
                  injectAdditionalCssVarScope: true,
                  // Tailwind CSS v4 需要指定 CSS 入口文件的绝对路径
                  cssEntries: [path.resolve(__dirname, '../src/app.scss')]
                }
              ]
            }
          }
        })
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    },
    alias: {
      '@/config': path.resolve(__dirname, '..', 'src/config'),
      '@/utils': path.resolve(__dirname, '..', 'src/utils'),
      '@/components': path.resolve(__dirname, '..', 'src/components'),
      '@/assets': path.resolve(__dirname, '..', 'src/assets'),
      '@/pages': path.resolve(__dirname, '..', 'src/pages'),
      '@/servers': path.resolve(__dirname, '..', 'src/services'),
      '@/package': path.resolve(__dirname, '..', 'package.json'),
      '@/project': path.resolve(__dirname, '..', 'project.config.json')
    }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
