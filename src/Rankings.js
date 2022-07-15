import React from "react";
import "./Rankings.css";
import { Space, Table, Tag } from 'antd';
import Navbar from "./Navbar";
import CardEvent from "./CardEvent";


export default function Rankings() {
  const columns = [
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Trainer',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Dance Styles',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    
  ];
  const data = [
    {
      key: '1',
      place: '1',
      name: 'John Brown',
      age: 32,
      address: 'Trainer1',
      tags: ['samba', 'rumba'],
    },
    {
      key: '2',
      place: '2',
      name: 'Jim Green',
      age: 42,
      address: 'Trainer2',
      tags: ['hiphop'],
    },
    {
      key: '3',
      place: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Trainer3',
      tags: ['vogue', 'contemporary'],
    },
    
  ];
  


  return (
    <div>
      <Navbar />
      <CardEvent/>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
