import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

export default function News() {
  return (
    <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://i.imgur.com/IXuC2az.jpg" />}
  >
    <Meta title="News Title" description="news-description" />
  </Card>
  );
}
