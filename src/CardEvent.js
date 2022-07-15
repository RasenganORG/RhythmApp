import { Card, List } from "antd";
import React from "react";
import "./CardEvent.css";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const data = [
  {
    title: (
      <>
        <NavLink to="/eventPage">Title 1</NavLink>
      </>
    ),
    shortContent: "Card content",
    longContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta justo enim, et tincidunt risus dictum nec. Maecenas diam leo, viverra vitae vestibulum vel, mattis sed nulla. Quisque ultricies tellus odio, condimentum malesuada turpis feugiat venenatis. Ut nec blandit dui, ultrices tempus purus. Nunc et lorem vitae purus euismod facilisis vel in nisi. Integer gravida efficitur odio, ut ullamcorper ante fringilla id. Duis a dictum lacus.",
  },
  {
    title: (
      <>
        <NavLink to="/eventPage">Title 2</NavLink>
      </>
    ),
    shortContent: "Card content",
    longContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta justo enim, et tincidunt risus dictum nec. Maecenas diam leo, viverra vitae vestibulum vel, mattis sed nulla. Quisque ultricies tellus odio, condimentum malesuada turpis feugiat venenatis. Ut nec blandit dui, ultrices tempus purus. Nunc et lorem vitae purus euismod facilisis vel in nisi. Integer gravida efficitur odio, ut ullamcorper ante fringilla id. Duis a dictum lacus.",
  },
  {
    title: (
      <>
        <NavLink to="/eventPage">Title 3</NavLink>
      </>
    ),
    shortContent: "Card content",
    longContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta justo enim, et tincidunt risus dictum nec. Maecenas diam leo, viverra vitae vestibulum vel, mattis sed nulla. Quisque ultricies tellus odio, condimentum malesuada turpis feugiat venenatis. Ut nec blandit dui, ultrices tempus purus. Nunc et lorem vitae purus euismod facilisis vel in nisi. Integer gravida efficitur odio, ut ullamcorper ante fringilla id. Duis a dictum lacus.",
  },
  {
    title: (
      <>
        <NavLink to="/eventPage">Title 4</NavLink>
      </>
    ),
    shortContent: "Card content",
    longContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta justo enim, et tincidunt risus dictum nec. Maecenas diam leo, viverra vitae vestibulum vel, mattis sed nulla. Quisque ultricies tellus odio, condimentum malesuada turpis feugiat venenatis. Ut nec blandit dui, ultrices tempus purus. Nunc et lorem vitae purus euismod facilisis vel in nisi. Integer gravida efficitur odio, ut ullamcorper ante fringilla id. Duis a dictum lacus.",
  },
];

const CardEvent = () => (
  <div>
    <div className="all">
    <div className="buttons">
    <Button shape = "circle" type="primary" className="back-button">
    <LeftOutlined />
    </Button>
    <Button shape = "circle" type="primary" className="forword-button">
    <RightOutlined />
    </Button>
    </div>
    <List
      className="card-event-list"
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>{item.shortContent}</Card>
        </List.Item>
      )}
    />
    </div>
    
  </div>
);

export default CardEvent;
