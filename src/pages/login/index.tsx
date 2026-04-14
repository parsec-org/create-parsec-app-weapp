import React from 'react'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const LoginPage: React.FC = () => {
  return (
    <View className='w-full h-full flex flex-col items-center justify-center'>
      <View className='text-center'>
        <View className='text-lg font-bold text-blue-600'>登录/注册</View>
        <View className='text-sm text-gray-500 mt-2'>NutUI + Tailwind 并行使用测试</View>
      </View>
      <Button
        openType='getPhoneNumber'
        onGetPhoneNumber={e => {
          console.log('getPhoneNumber', e.detail)
        }}
      >
        <View className='text-center'>获取手机号</View>
      </Button>
      <Button
        onClick={() => {
          Taro.login({
            success: loginRes => {
              console.log('login', loginRes)
            }
          })
        }}
      >
        <View className='text-center'>微信登录</View>
      </Button>
    </View>
  )
}

export default LoginPage
