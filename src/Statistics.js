import React from "react";
import "./Statistics.css";
import Navbar from "./Navbar";
import {
  DownOutlined,
  UserOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space, Tooltip } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Statistics() {
  // for dropdown
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Chart",
          key: "1",
          icon: <LineChartOutlined />,
        },
        {
          label: "My Stock Chart",
          key: "2",
          icon: <LineChartOutlined />,
        },
      ]}
    />
  );

  // for charts
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };

  const options2 = {
    title: {
      text: "My stock chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="statistics-title-button">
        <h1 className="statistics-title">School Statistics</h1>
        <Dropdown overlay={menu}>
          <Button>
            Button
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options2}
      /> */}
    </div>
  );
}
