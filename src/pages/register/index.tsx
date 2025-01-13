import Taro from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { Button, Checkbox, Form, FormItem, Icon } from '@antmjs/vantui';
import './index.less';

export default () => {
  const formIt = Form.useForm();
  return (
    <View className="register-page-wrap">
      <View className="register-page-hander-wrap">
        <View className="dot top" />
        <View className="title-wrap">
          <View className="title-inner-wrap">
            <View className="subtitle">
              <Text>Create Parsec</Text>
            </View>
            <View className="title">
              <Text>Sign up!</Text>
            </View>
          </View>
        </View>
        <View className="dot" />
      </View>
      <View className="register-page-form-wrap">
        <Form form={formIt}>
          <FormItem name="username" label="Full Name" renderRight={<Icon name="contact" size="22px" />}>
            <Input />
          </FormItem>
          <FormItem name="email" label="Email Account" renderRight={<Icon name="envelop-o" size="22px" />}>
            <Input />
          </FormItem>
          <FormItem name="password" label="Password" renderRight={<Icon name="eye-o" size="22px" />}>
            <Input type="text" password />
          </FormItem>
          <FormItem name="password" label="Password" className="accept">
            <Checkbox name="c" className="rerrere">
              <Text>I accept</Text>
              <Text>&nbsp; XXXXXXXXXXXX</Text>
            </Checkbox>
          </FormItem>
          <Button
            type="primary"
            block
            round
            size="large"
            className="van-button-submit"
            // onClick={handleClick}
            // formType="submit"
          >
            Sign in
          </Button>
          <View className="form-footer-item" onClick={() => Taro.redirectTo({ url: '/pages/login/index' })}>
            <Text>Already have an account? </Text>
            <Text className="link">Log in.</Text>
          </View>
        </Form>
      </View>
    </View>
  );
};
