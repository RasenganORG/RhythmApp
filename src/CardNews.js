import { Card } from 'antd';
import React from 'react';
import "./CardNews.css"
const { Meta } = Card;

const CardNews = () => (
  <div className="cardNews">
  <Card 
    hoverable
    style={{
      width: 240,
      background: "black"
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </div>

);

export default CardNews;