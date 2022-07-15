import { Layout, Menu } from "antd";
import React from "react";
import "./Home.css";
import CardEvent from "./CardEvent";
import CardNews from "./CardNews";
import Navbar from "./Navbar";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <CardEvent></CardEvent>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          <CardNews className="card-news" key="1"></CardNews>
          <CardNews key="2"></CardNews>
          <CardNews key="3"></CardNews>
          <CardNews key="4"></CardNews>
          <CardNews key="5"></CardNews>
          <CardNews key="6"></CardNews>
          <CardNews key="7"></CardNews>
          <CardNews key="8"></CardNews>
        </div>
      </Content>
    </Layout>
  );
};
export default Home;
