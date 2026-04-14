import React from 'react'
import Taro, { useDidShow, useDidHide, useLaunch } from '@tarojs/taro'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import zhCN from '@nutui/nutui-react-taro/dist/es/locales/zh-CN'
// 默认主题 引入所有组件的样式文件
import '@nutui/nutui-react-taro/dist/style.css'
// 全局样式
import './app.scss'

interface AppProps {
  children: React.ReactNode
}
if (process.env.TARO_ENV === 'weapp') {
  const updateManager = Taro.getUpdateManager()
  updateManager.onUpdateReady(() => {
    Taro.showModal({
      title: '更新提示',
      content: '新版本已经准备好，即将重启应用。',
      showCancel: false
    }).then(updateManager.applyUpdate)
  })
}
function App({ children }: AppProps) {
  useLaunch(() => {
    console.log('App launched.')
  })

  useDidShow(() => {
    console.log('process.env.TARO_ENV:', process.env.TARO_ENV)
    if (process.env.TARO_ENV === 'weapp') {
      console.log(`${process.env.TARO_ENV}运行版本：`, __wxConfig.envVersion)
    }
    Taro.startLocationUpdate({
      type: 'gcj02',
      needFullAccuracy: true,
      success: function (res) {
        console.log('开始位置更新成功', res)
      }
    })
  })

  // 对应 onHide
  useDidHide(() => {
    // TODO: 应用隐藏时的逻辑
  })

  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
}

export default App
