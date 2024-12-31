import { useCallback, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { Button } from '@antmjs/vantui';
import { getAppHost, timeout } from '@/utils/index';
import './index.less';

export default () => {
  useLoad(() => {
    console.log('Page loaded.');
  });
  const [value, setValue] = useState<string>();

  const handleClick = useCallback(() => {
    console.log('dddd', value);
  }, [value]);

  // 点击事件返回Promise，即可让按钮自带loading状态
  const handle = async () => {
    await timeout();
  };

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Text>TARO_APP_API:{process.env.TARO_APP_API}</Text>
      <View>
        <Button
          type="default"
          onClick={() => {
            const host = getAppHost();
            console.log('host:', host);
          }}
        >
          默认按钮
        </Button>
        <Button type="primary" onClick={handleClick}>
          主要按钮
        </Button>
        <Button
          type="info"
          onClick={() => {
            setValue('weqeqeqeqweq');
          }}
        >
          信息按钮
        </Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="info" onClick={handle} loadingText="提交中...">
          确认提交
        </Button>
        <Button type="primary" onClick={handle} loadingMode="toast" loadingText="提交中..." loadingType="spinner">
          确认提交
        </Button>
      </View>
      <View>
        <Button plain hairline type="primary">
          细边框按钮
        </Button>
        <Button plain hairline type="info">
          细边框按钮
        </Button>
      </View>
      <View>
        <Text>内置样式</Text>
      </View>
      <View>
        <View className="van-ellipsis" style={{ width: '200px', marginBottom: '20px' }}>
          这是一段宽度限制 250px 的文字，后面的内容会省略。
        </View>

        {/**  最多显示两行**/}
        <View className="van-multi-ellipsis--l2" style={{ width: '200px', marginBottom: '20px' }}>
          这是一段最多显示两行的文字，后面的内容会省略。 这是一段最多显示两行的文字，后面的内容会省略。
        </View>

        {/**  最多显示三行**/}
        <View className="van-multi-ellipsis--l3" style={{ width: '200px' }}>
          这是一段最多显示三行的文字，后面的内容会省略。 这是一段最多显示两行的文字，后面的内容会省略。
          这是一段最多显示两行的文字，后面的内容会省略。
        </View>

        {/**  上边框,可选各个方向 **/}
        <View className="van-hairline--top" style={{ width: '200px', marginBottom: '20px' }}></View>

        {/**  全边框 **/}
        <View className="van-hairline--surround" style={{ width: '200px', marginBottom: '20px', height: '200px' }}>
          全边框
        </View>
        <View>
          <Button
            onClick={() => {
              Taro.navigateTo({
                url: '/pages/me/index?page=1&name=2',
              });
            }}
          >
            我的
          </Button>
        </View>
      </View>
    </View>
  );
};
