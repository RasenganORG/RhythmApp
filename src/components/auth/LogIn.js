import { useDispatch, useSelector } from "react-redux";
import { authActions, login } from "./authSlice";
import "./Login.css";
import {
  LockOutlined,
  UserOutlined,
  LoadingOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Spin } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export default function Login() {
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const onFinish = (values) => {
    const userData = { ...values.user };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess || user) {
      navigate(from, { replace: true });
    }
    dispatch(authActions.reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spin indicator={antIcon} />;

  return (
    <Row align="middle" style={{ height: "100vh" }}>
      <Col span={6} offset={9}>
        <h1>Log In</h1>
        <Form
          name="login-user"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name={["user", "email"]}
            rules={[
              {
                required: true,
                message: "Please enter a valid email.",
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              data-cy="login-email-input"
            />
          </Form.Item>
          <Form.Item
            name={["user", "password"]}
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
              data-cy="login-password-input"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <span>
              Or <Link to="/register">register now !</Link>
            </span>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
