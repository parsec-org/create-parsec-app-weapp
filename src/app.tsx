import { PropsWithChildren } from 'react';
import Taro, { useDidShow, useLaunch } from '@tarojs/taro';
import { ConfigProvider } from '@antmjs/vantui';
import './app.less';

if (process.env.TARO_ENV === 'weapp') {
  const updateManager = Taro.getUpdateManager();
  updateManager.onUpdateReady(() => {
    Taro.showModal({
      title: '更新提示',
      content: '新版本已经准备好，即将重启应用。',
      showCancel: false,
    }).then(updateManager.applyUpdate);
  });
}

export default (props: PropsWithChildren) => {
  useLaunch(() => {
    console.log('App launched.');
  });

  useDidShow(() => {
    console.log('process.env.TARO_ENV:', process.env.TARO_ENV);
    if (process.env.TARO_ENV === 'weapp') {
      console.log(`${process.env.TARO_ENV}运行版本：`, __wxConfig.envVersion);
    }
  });

  // 这里定义你的主题样式
  const themeVars = {
    primaryColor: 'var(--primary-color)',
    rateIconFullColor: '#e19a9a',
    sliderBarHeight: '4px',
    sliderButtonWidth: '20px',
    sliderButtonHeight: '20px',
  };

  return <ConfigProvider themeVars={themeVars}>{props.children}</ConfigProvider>;
};
