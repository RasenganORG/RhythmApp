import React from "react";
import "./LayoutPage.css";
import { Outlet, NavLink } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { AuthStatus } from "../auth/AuthStatus";
import News from "../news/News";
const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const items = [
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
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Log In
        </NavLink>
      ),
      key: "item-5",
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
      key: "item-5",
    },
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
            items={items}
          />
        </Header>
        <AuthStatus />
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutPage;
