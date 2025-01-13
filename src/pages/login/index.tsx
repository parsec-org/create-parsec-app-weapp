import { useCallback } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { Button, Form, FormItem, Icon } from '@antmjs/vantui';
import './index.less';

export default () => {
  const formIt = Form.useForm();

  const handleClick = useCallback(() => {
    Taro.setStorage({
      key: 'isLogin',
      data: true,
    }).then(() => {
      Taro.switchTab({ url: '/pages/index/index' });
    });
  }, []);

  return (
    <View className="login-page-wrap">
      <View className="login-page-hander-wrap">
        <View className="dot top" />
        <View className="title-wrap">
          <View className="title-inner-wrap">
            <View className="subtitle">
              <Text>Create Parsec</Text>
            </View>
            <View className="title">
              <Text>Sign in!</Text>
            </View>
          </View>
        </View>
        <View className="dot" />
      </View>
      <View className="login-page-form-wrap">
        <Form form={formIt}>
          <FormItem name="email" label="Email Account" renderRight={<Icon name="envelop-o" size="22px" />}>
            <Input />
          </FormItem>
          <FormItem name="password" label="Password" renderRight={<Icon name="eye-o" size="22px" />}>
            <Input type="text" password />
          </FormItem>
          <View className="form-expand-item">
            <View>&nbsp;</View>
            <View onClick={() => Taro.redirectTo({ url: '/pages/register/index' })}>
              <Text>Not a member?</Text>
              <Text className="link">Sign Up</Text>
            </View>
          </View>
          <Button
            type="primary"
            block
            round
            size="large"
            className="van-button-submit"
            onClick={handleClick}
            // formType="submit"
          >
            Sign in
          </Button>
        </Form>
      </View>
    </View>
  );
};
