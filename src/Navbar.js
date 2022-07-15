import { Layout, Menu } from "antd";
import React from "react";
import "./Navbar.css";
import {
  Link,
  useNavigate,
  NavLink,
} from "react-router-dom";
const { Header } = Layout;
let activeStyle = {
  textDecoration: "underline",
};
const items = [
  {
    label: (<>
         <NavLink
            to="/courses"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Courses
          </NavLink>
        </>),
    key: "item-1",
  },
  {
    label: (<>
        <NavLink
            to="/schools"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Schools
          </NavLink>
        </>),
    key: "item-2",
  },
  {
    label: (<>
    <NavLink
            to="/trainers"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Trainers
          </NavLink>
    </>),
    key: "item-3",
  },
  {
    label: (<>
        <NavLink
            to="/rankings"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Rankings
          </NavLink>
        </>),
    key: "item-4",
  },
  {
    label: (<>
        <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Log In
          </NavLink>
        </>),
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
  return (
    <Layout className="layout">
      <Header >
        <div className="menu-logo">
        <img className="logo-img" src ="https://i.imgur.com/oXHsK3r.png" alt ="logo-img"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="menu-buttons"
          items={items}
        >
        </Menu>
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
