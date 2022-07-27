import React from "react";
import "./LayoutPage.css";
import { Outlet, NavLink } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { AuthStatus } from "../auth/AuthStatus";
const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "#ffff",
  };
  const menuItems  = [
    {
      label: (
        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
           <Button>News</Button>
        </NavLink>
      ),
      key: "item-1",
    },
    {
      label: (
        <NavLink
          to="/schools"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Button>Schools</Button>
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
         <Button>Log In</Button>
        </NavLink>
      ),
      key: "item-3",
    },
    {
      label: (
        <NavLink
          to="/register"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Button>Register</Button>
        </NavLink>
      ),
      key: "item-4",
    },
    {
      label: (
        <NavLink
          to="/statistics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Button>Statistics</Button>
        </NavLink>
      ),
      key: "item-5",
    },
    {
      label: (
        <NavLink
          to="/addSchools"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
         <Button>Add Schools</Button>
        </NavLink>
      ),
      key: "item-6",
    },
  ];

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          /> */}
          {menuItems.map((item) => item.label)}
        </Header>
        <AuthStatus />
        <Content
          style={{
            padding: "0 50px",
            height: "100vh"
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
