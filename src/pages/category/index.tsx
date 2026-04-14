import { useState } from 'react'
import { View } from '@tarojs/components'
import { SideBar } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import './index.scss'

function Index() {
  const res = Taro.getSystemInfoSync()
  const [selectedValue, setSelectedValue] = useState<number | string>('0')
  const list = Array.from(new Array(20).keys())
  return (
    <View className='page'>
      <SideBar
        style={{ height: res.windowHeight }}
        value={selectedValue}
        contentDuration={500}
        sidebarDuration={300}
        onChange={value => {
          setSelectedValue(value)
        }}
      >
        {list.map(item => (
          <SideBar.Item key={item} title={`Opt ${item + 1}`}>
            {`Content ${item + 1}`}
          </SideBar.Item>
        ))}
      </SideBar>
    </View>
  )
}

export default Index
