import { Layout, Menu } from "antd";
import React from "react";
import "./Navbar.css";
import {
  DownOutlined,
  UserOutlined,
  LineChartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
const { Header } = Layout;
let activeStyle = {
  textDecoration: "underline",
  fontWeight: "bold",
  color: "#ffff"
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
  // {
  //   label: (<>
  //       <span>Log In</span>
  //       <Link to="/login" />
  //       </>),
  //   key: "item-5",
  // },
];

const Navbar = () => {
  // for dropdown
  const handleButtonClick = (e) => {
    console.log("click left button", e);
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: (
            <>
              <Link to="/statistics">See Statistics</Link>
            </>
          ),
          key: "1",
          icon: <LineChartOutlined />,
        },
        {
          label:  (<>
          <Link to="/createEvent">Create Event</Link>
        </>),
          key: "2",
          icon: <PlusOutlined />,
        },
        {
          label: (<>
            <Link to="/createNews">Create News</Link>
          </>),
          key: "3",
          icon: <PlusOutlined />,
        },
        {
          label: (<>
            <Link to="/addSchool">Add School</Link>
          </>),
          key: "4",
          icon: <PlusOutlined />,
        },
        {
          label: (<>
            <Link to="/addTrainer">Add Trainer</Link>
          </>),
          key: "5",
          icon: <PlusOutlined />,
        },
      ]}
    />
  );

  const navigate = useNavigate();
  const logoRedirect = () => {
    navigate("/");
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="menu-logo">
          <img
            className="logo-img"
            src="https://i.imgur.com/oXHsK3r.png"
            alt="logo-img"
            onClick={logoRedirect}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="menu-buttons"
            items={items}
          ></Menu>
          <Dropdown overlay={menu}>
            <Button ghost className="ghost-button">
              See More
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
