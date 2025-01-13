import Taro, { useLoad } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Button } from '@antmjs/vantui';
import './index.less';

export default () => {
  const windowInfo = Taro.getWindowInfo();
  useLoad((e) => {
    console.log('Page loaded.', e);
    const value = Taro.getStorageSync('isLogin');
    console.log('value', value);
    if (!value) {
      Taro.redirectTo({ url: '/pages/login/index' });
    }
  });
  return (
    <View className="me-page-wrap">
      <View className="me-page-hander-wrap" style={{ paddingTop: windowInfo.statusBarHeight }}>
        dfds
      </View>
      我的
      <View>
        <Button
          onClick={() => {
            Taro.navigateBack({});
          }}
        >
          返回
        </Button>
      </View>
    </View>
  );
};
