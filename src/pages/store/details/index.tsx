import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { NavBar, Swiper, SwiperItem, Toast, Image } from '@antmjs/vantui';
import { CSSProperties, useState } from 'react';
import './index.less';

export default () => {
  const [current, setCurrent] = useState<number>(0);

  const style: CSSProperties = {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 46,
    height: 22,
    background: 'rgba(0,0,0,.33)',
    borderRadius: 22,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  };

  return (
    <View className="store-detail-page-wrap">
      <NavBar fixed safeAreaInsetTop leftText="" leftArrow onClickLeft={() => Taro.navigateBack()} />
      <View className="store-detail-images-wrap">
        <Swiper
          height={300}
          paginationVisible
          paginationColor="#426543"
          autoPlay="3000"
          initPage={current}
          onChange={(e) => setCurrent(e + 1)}
          pageContent={<View style={style}> {current}/4 </View>}
        >
          {new Array(4).fill(1).map((_, index) => (
            <SwiperItem key={`swiper#demo4${index}`}>
              <Image src={require('@/assets/images/products/p_01.png')} fit="cover" width="100%" height="300px" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
      <View className="store-detail-content-wrap">
        <View className="store-detail-title">
          <View className="store-detail-title-name">商品名称</View>
          <View className="store-detail-title-price">￥999.99</View>
        </View>
      </View>
      <Toast />
    </View>
  );
};
