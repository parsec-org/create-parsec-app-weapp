import Taro, { useLoad } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Button } from '@antmjs/vantui';
import './index.less';

export default () => {
  useLoad((e) => {
    console.log('Page loaded.', e);
  }, []);
  return (
    <View className="me-page-wrap">
      订单
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
