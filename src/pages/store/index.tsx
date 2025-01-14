import { useState } from 'react';
import Taro, { useLoad } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { Button, Rate, Stepper, Swiper, SwiperItem, Image } from '@antmjs/vantui';
import { amountFormat } from '@/utils/index';
import './index.less';

export default () => {
  const [current, setCurrent] = useState<number>(0);

  useLoad((e) => {
    console.log('Page loaded.', e);
  });

  return (
    <View className="store-page-wrap">
      <View className="category-scroll-wrap">
        {new Array(10).fill(1).map((_, index) => (
          <View className="category-item-wrap" key={`category-item-${index}`}>
            <Text>Category</Text>
            <Text>{index}</Text>
          </View>
        ))}
      </View>
      <View className="recommended-wrap">
        <View className="recommended-hander-wrap">
          <View className="title">
            <Text>Recommended for you</Text>
          </View>
          <View className="progress">
            <Text>{current}</Text>
            <Text>/</Text>
            <Text>4</Text>
          </View>
        </View>
        <View className="recommended-content-wrap">
          <Swiper
            height="400"
            autoPlay="10000"
            initPage={current}
            onChange={(e) => setCurrent(e + 1)}
            paginationVisible={false}
          >
            {new Array(4).fill(1).map((_, index) => (
              <SwiperItem key={`swiper#demo1${index}`}>
                <View
                  className="recommended-item-wrap"
                  onClick={() => Taro.navigateTo({ url: `/pages/store/details/index?id=${index}` })}
                >
                  <View className="item-image-wrap">
                    <Image className="img" src={require('@/assets/images/products/p_01.png')} />
                  </View>
                  <View className="item-body-wrap">
                    <View className="main-info">
                      <View className="title">
                        <Text>Product name</Text>
                      </View>
                      <View className="price">
                        <Text>¥</Text>
                        <Text className="amount">{amountFormat(888, { style: 'decimal' })}</Text>
                      </View>
                    </View>
                    <View className="item-dece">
                      <Text>description</Text>
                    </View>
                  </View>
                  <View className="item-footer-wrap">
                    <Button plain hairline className="rate-btn">
                      <Rate value={4} size="30" allowHalf voidIcon="star" color="#7c3aed" voidColor="#eee" />
                      <Text>(87)</Text>
                    </Button>
                    <Stepper value={1} />
                    <Button type="primary">ADD</Button>
                  </View>
                </View>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      </View>
      <View className="product-list-wrap">
        {new Array(10).fill(1).map((_, index) => (
          <View
            className="product-item-wrap"
            key={`product-item-${index}`}
            onClick={() => Taro.navigateTo({ url: `/pages/store/details/index?id=${index}` })}
          >
            <View className="product-image-wrap">
              <Image className="img" src={require('@/assets/images/products/p_02.png')} />
            </View>
            <View className="product-content-wrap">
              <View className="product-title">Product name info</View>
              <View className="product-desc">Product description info</View>
              <View className="product-info">
                <View className="rate-wrap">
                  <Rate value={4} size="24" allowHalf voidIcon="star" color="#7c3aed" voidColor="#eee" />
                  <Text>(87)</Text>
                </View>
                <View className="price-wrap">
                  <Text>¥</Text>
                  <Text className="amount">{amountFormat(888, { style: 'decimal' })}</Text>
                </View>
              </View>
              <View className="product-action-wrap">
                <Stepper value={1} />
                <Button type="primary">ADD</Button>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
