import React from "react";
import "./LayoutPage.css";
import { Outlet, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logout, authActions } from "../auth/authSlice";
import {
  BarChartOutlined,
  ReadOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Events from "../events/Events";

const { Header, Content } = Layout;

const LayoutPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.user);
  const activeStyle = {
    textDecoration: "underline",
    color: "#ffff",
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(authActions.reset());
  };

  const menuItems = [
    isAuth
      ? {
          label: <>Hello, {isAuth.username}!</>,
          key: "item-7",
        }
      : null,
    {
      label: (
        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          News
        </NavLink>
      ),
      key: "item-1",
      icon: <ReadOutlined />,
    },
    {
      label: (
        <NavLink
          to="/schools"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Schools
        </NavLink>
      ),
      key: "item-2",
    },
    {
      label: (
        <NavLink
          to="/statistics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Statistics
        </NavLink>
      ),
      key: "item-3",
      icon: <BarChartOutlined />,
    },
    {
      label: isAuth ? (
        <NavLink to="/" onClick={onLogout}>
          Log Out
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Log In
        </NavLink>
      ),
      key: "item-4",
      icon: isAuth ? <LogoutOutlined /> : <LoginOutlined />,
    },
    !isAuth
      ? {
          label: (
            <NavLink
              to="/register"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Register
            </NavLink>
          ),
          key: "item-5",
          icon: <UserAddOutlined />,
        }
      : null,
  ];

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={menuItems}
          />
        </Header>
        <Events />
        <Content className="layoutContent">
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutPage;
