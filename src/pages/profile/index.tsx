import { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, TextArea, Dialog, Cell } from '@nutui/nutui-react-taro'
import './index.scss'

function Index() {
  const [visible, setVisible] = useState(false)
  const marginStyle = { margin: '8px' }
  return (
    <View className='page'>
      <View>欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View>
        <Dialog
          visible={visible}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          点击打开
        </Dialog>
        <TextArea disabled showCount maxLength={20} />
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
      </Cell>
    </View>
  )
}

export default Index
