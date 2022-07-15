import React from "react";
import Navbar from "./Navbar";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Collapse } from "antd";
import { Button, message, Space } from "antd";
import "./EventPage.css";
import { Col, Row } from "antd";

export default function EventPage() {
  const success = () => {
    message.success("See you there!");
  };
  const { Panel } = Collapse;
  return (
    <div>
        <Navbar />

      <Row>
        <Col span={12}>
          <img className="event-img"
          src="https://i.imgur.com/X6uH4J3.jpg" alt="dance-img" />
        </Col>
        <Col span={12}>
          <div className="title-description">
            <h1 className="event-title">Event Title</h1>
            <h4 className="event-description">
              Short description: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In porta justo enim, et tincidunt risus dictum
              nec. Maecenas diam leo, viverra vitae vestibulum vel, mattis sed
              nulla. Quisque ultricies tellus odio, condimentum malesuada turpis
              feugiat venenatis. Ut nec blandit dui, ultrices tempus purus.
            </h4>
          </div>
        </Col>
      </Row>

      <Collapse className="colapse" defaultActiveKey={["0"]}>
        <Panel header="Created By" key="1">
          <Avatar
            style={{
              backgroundColor: "#0096D8",
            }}
            icon={<UserOutlined />}
          />
          <p>Creator Name</p>
        </Panel>
        <Panel header="More Info" key="2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            justo enim, et tincidunt risus dictum nec. Maecenas diam leo,
            viverra vitae vestibulum vel, mattis sed nulla. Quisque ultricies
            tellus odio, condimentum malesuada turpis feugiat venenatis. Ut nec
            blandit dui, ultrices tempus purus. Nunc et lorem vitae purus
            euismod facilisis vel in nisi. Integer gravida efficitur odio, ut
            ullamcorper ante fringilla id. Duis a dictum lacus.
          </p>
        </Panel>
        <Panel header="Trainers that will be there" key="3">
          <p>Trainer 1</p>
          <p>Trainer 2</p>
          <p>Trainer 3</p>
        </Panel>
      </Collapse>
        <Button type="primary" onClick={success} className="participate-button">
          I want to participate!
        </Button>
    </div>
  );
}
