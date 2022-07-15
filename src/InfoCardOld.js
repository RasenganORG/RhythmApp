import React from "react";
import "./InfoCard.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Divider, List, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
import { Link } from "react-router-dom";

export default function CoursesCard({name, firstDevider, secondDevider, firstData, secondData}) {
 
  return (
    <div className="courses-card">
      <div className="course-name-avatar">
        <Avatar size={64} icon={<UserOutlined />} />
        <p>{name}</p>
      </div>
      <div className="course-lists">
        <div className="list">
          <Divider orientation="left">{firstDevider}</Divider>
          <List
            size="small"
            bordered
            dataSource={firstData}
            renderItem={(item) => (
              <List.Item className="list-item">{item}</List.Item>
            )}
          />
        </div>
        <div className="list">
          <Divider orientation="left">{secondDevider}</Divider>
          <List
            size="small"
            bordered
            dataSource={secondData}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
            
      <Link to ='/calendar'>
      <Button type="default" shape="round" className="card-button">
        Disponibility
      </Button>
      </Link>
    </div>
  );
}
