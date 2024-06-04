import { Form, Input , Button, Card } from 'antd';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import { useAuth } from '@/store/auth/useAuth';
import { request } from '@/utils/request';
import { API_PATH } from '@/constants/api';


const LoginPage = () => {
  const { onLogin } = useAuth();

  const onFinish = (values: any) => {
    request.post(API_PATH.AUTH_LOGIN, {
      data: values,
    })
      .then(function(response) {
        console.log(response);
        onLogin({
          token: response.access_token,
          refreshToken: response.access_token,
          expiredTime: response.expires_in,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log('Success:', values);
  };
  const onFinishFailed = (values: any) => {
    console.log('Failed:', values);
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      
      <div className={styles.loginWrap}>
      <Card>
        <img src='/images/logo.png' alt='logo' />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{
            ["email"]: 'baolx@gmail.com',
            ["password"] : "password"
          }}
        >
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
              {
                type: 'email',
                message: 'Email không hợp lệ',
              },
            ]}
          >
            <Input placeholder='Nhập email'/>
          </Form.Item>

          <Form.Item
            name='password'
            label='Mật khẩu'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              {
                min: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            ]}
          >
            <Input.Password placeholder='Mật khẩu'/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      </div>
    </>
  );
};

export default LoginPage;
