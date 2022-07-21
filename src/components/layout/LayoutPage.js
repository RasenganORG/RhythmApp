import React from "react";
import "./LayoutPage.css";
import { Outlet, NavLink } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const items = [
    {
      label: (
        <>
          <NavLink
            to="/courses"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Courses
          </NavLink>
        </>
      ),
      key: "item-1",
    },
    {
      label: (
        <>
          <NavLink
            to="/schools"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Schools
          </NavLink>
        </>
      ),
      key: "item-2",
    },
    {
      label: (
        <>
          <NavLink
            to="/trainers"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Trainers
          </NavLink>
        </>
      ),
      key: "item-3",
    },
    {
      label: (
        <>
          <NavLink
            to="/rankings"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rankings
          </NavLink>
        </>
      ),
      key: "item-4",
    },
    {
      label: (
        <>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Log In
          </NavLink>
        </>
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
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
         
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
