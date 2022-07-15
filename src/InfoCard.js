import { Avatar, List } from "antd";
import React from "react";
import { Tag } from "antd";
import { Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Button} from "antd";
import "./InfoCard.css"

const data = [
  {
    title: "Ant Design Title 1",
    color: "red",
    style: "rumba"
  },
  {
    title: "Ant Design Title 2",
    color: "green",
    style: "samba"
  },
  {
    title: "Ant Design Title 3",
    color: "purple",
    style: "hiphop"
  },
  {
    title: "Ant Design Title 4",
    color: "lime",
    style: "freestyle"
  },
];
const color = "green";
const InfoCard = ({title, color, style}) => (
  <div className="info-card">
  <List 
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar size="large"src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={<Tag color={item.color}>{item.style}</Tag>
          }
        />
        <p>Trainers:</p>
        <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Link to ='/calendar'>
      <Button type="default" shape="round" className="card-button">
        Disponibility
      </Button>
      </Link>
      </List.Item>
      
    )}
  />
  </div>
);

export default InfoCard;
