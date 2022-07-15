import { Layout, Menu, Button } from "antd";
import React from "react";
import "./Home.css";
import CardEvent from "./CardEvent";
import CardNews from "./CardNews";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <CardEvent className='card-event'></CardEvent>

      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          <Link to="/newsPage">
            <CardNews className="card-news" key="1"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="2"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="3"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="4"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="5"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="6"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="7"></CardNews>
          </Link>
          <Link to="/newsPage">
            <CardNews key="8"></CardNews>
          </Link>
        </div>
      </Content>
    </Layout>
  );
};
export default Home;
