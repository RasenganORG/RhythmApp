import React from "react";
import "./LayoutPage.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logout, authActions } from "../auth/authSlice";

const { Header, Content, Footer } = Layout;
const LayoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.user);
  console.log(isAuth);
  let activeStyle = {
    textDecoration: "underline",
    color: "#ffff",
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(authActions.reset());
  };
  const items = [
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
      key: "item-5",
    },
    {
      label: (
        <NavLink
          to="/addSchools"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Add Schools
        </NavLink>
      ),
      key: "item-6",
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
      key: "item-3",
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
          key: "item-4",
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
            items={items}
          />
        </Header>

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
