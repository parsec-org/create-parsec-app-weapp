import { useState } from 'react'
import {
  View,
  Image,
  CommonEventFunction,
  SwiperProps as TaroSwiperProps
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Button, TextArea, Dialog, Cell, SafeArea, NavBar, Swiper } from '@nutui/nutui-react-taro'
// 工具函数从 utils 导入，避开 babel-plugin-import 处理
import { pxTransform, harmony } from '@nutui/nutui-react-taro/dist/es/utils'
import './index.scss'

function Index() {
  const res = Taro.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
  console.log(res.system)
  console.log(res.statusBarHeight)
  console.log('harmony', harmony())
  const [visible, setVisible] = useState(false)
  const marginStyle = { margin: '8px' }
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  const onChange: CommonEventFunction<TaroSwiperProps.onChangeEventDetail> = e => {
    console.log(`onChange is trigger ${e}`)
  }
  return (
    <View className='page' style={{ marginTop: res.statusBarHeight }}>
      <SafeArea position='top' />
      <NavBar
        title='页面标题'
        safeAreaInsetTop
        back={
          <>
            <div style={{ marginRight: 16 }}>1</div>
            返回
          </>
        }
        right={<div onClick={_ => Taro.showToast({ title: 'icon' })}>2</div>}
        onBackClick={_ => Taro.showToast({ title: '返回' })}
      >
        NavBar
      </NavBar>
      <View>欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      {/* Tailwind CSS 测试 */}
      <View className='flex flex-col items-center p-4 bg-blue-100 rounded-lg mt-4'>
        <View className='text-lg font-bold text-blue-600'>Tailwind CSS 已集成</View>
        <View className='text-sm text-gray-500 mt-2'>NutUI + Tailwind 并行使用测试</View>
      </View>
      <View>
        <Swiper defaultValue={2} autoplay indicator height={pxTransform(200)} onChange={onChange}>
          {list.map((item, index) => (
            <Swiper.Item key={item}>
              <Image
                style={{ width: '100%', height: '100%' }}
                onClick={() => console.log(index)}
                src={item}
              />
            </Swiper.Item>
          ))}
        </Swiper>
      </View>
      <View>
        <Dialog
          visible={visible}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          点击打开
        </Dialog>
        <TextArea showCount maxLength={20} />
      </View>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Button openType='share' style={marginStyle}>
          Share
        </Button>
        <Button openType='openSetting' style={marginStyle}>
          打开授权设置页
        </Button>
      </Cell>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Button type='primary' style={marginStyle}>
          Primary
        </Button>
        <Button type='info' style={marginStyle}>
          Info
        </Button>
        <Button type='default' style={marginStyle}>
          Default
        </Button>
        <Button type='danger' style={marginStyle}>
          Danger
        </Button>
        <Button type='warning' style={marginStyle}>
          Warning
        </Button>
        <Button type='success' style={marginStyle}>
          Success
        </Button>
        <Button
          type='success'
          style={marginStyle}
          onClick={() => {
            Taro.redirectTo({ url: '/pages/login/index' })
          }}
        >
          Login
        </Button>
      </Cell>
    </View>
  )
}

export default Index
