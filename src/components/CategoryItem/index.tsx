import React, { useRef } from 'react';
import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import cN from 'classnames';

interface CategoryItemProps {
  data: { key: number; text: string };
  active: boolean;
  onClick: (key: number) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ data, active, onClick }) => {
  const categoryItemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (categoryItemRef.current) {
      const query = Taro.createSelectorQuery();
      query
        .select(`#category-item-wrap-${data.key}`) // 假设你的元素有一个ID为myElement
        .boundingClientRect()
        .exec((res) => {
          if (res && res[0]) {
            const rect = res[0];
            console.log(rect); // 输出边界信息，包括 top, left, width, height 等
            // const innerWidth = window.innerWidth;
            // console.log('innerWidth', innerWidth);
            // const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            // console.log('scrollLeft', window.scrollX, window.document.body.scrollLeft);
            // const scrollTarget = rect?.left + scrollLeft - innerWidth / 2;
            // console.log('scrollTarget:', scrollTarget);
            // console.log('rect.node', rect.node);
            // rect.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
          }
        });
      // categoryItemRef.current.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
    }
    onClick(data.key);
  };

  return (
    <View
      ref={categoryItemRef}
      id={`category-item-wrap-${data.key}`}
      className={cN('category-item-wrap', { active })}
      onClick={handleClick}
    >
      <Text>{data.text}</Text>
      <Text>{data.key}</Text>
    </View>
  );
};

export default CategoryItem;
