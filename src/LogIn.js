import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "./LogIn.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const redirectHome = () => {
    navigate("/");
  };
  const redirectRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <h1 className="log-in-title">Log In</h1>
      <Form 
        name="normal_login"
        className="login-form input-field"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item  
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <div className="login-form-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={redirectHome}
          >
            Log in
          </Button>
          <p className="register-now-button">
            Or <a onClick={redirectRegister}>register now!</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
