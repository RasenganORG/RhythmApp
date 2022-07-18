import { Card } from 'antd';
import React from 'react';
import "./CardNews.css"
const { Meta } = Card;

const CardNews = () => (
  <div className="cardNews" >
  <Card 
    hoverable
    style={{
      width: 240,
      background: "white"
    }}
    cover={<img alt="example" src="https://i.imgur.com/IXuC2az.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </div>

);

export default CardNews;