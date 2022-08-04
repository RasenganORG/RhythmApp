import { Tabs, Avatar, List, Tag } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { getSchoolById } from "./schoolsSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./SchoolItem.css";
import {
  InstagramFilled,
  LikeFilled,
  LinkOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

export default function SchoolsItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const schoolId = params.schoolId;
  const currentSchool = useSelector((state) => state.schools.currentSchool)

  console.log({schoolId})

  useEffect(() => {
    dispatch(getSchoolById(schoolId));
  }, []);

  const tagColors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="headerIcons">
          <div className="insta icon">
            <InstagramFilled />
          </div>
          <div className="like icon">
            <LikeFilled />
          </div>
          <div className="link icon">
            <LinkOutlined />
          </div>
          <div className="twitter icon">
            <TwitterOutlined />{" "}
          </div>
        </div>
        <div className="headerContent">
          <h1 className="headerContentTitle">{currentSchool?.name}</h1>
          <h1 className="headerContentBody">{currentSchool?.description}</h1>
        </div>
      </div>
      <div className="imgAndTabs">
        <img
          className="headerImg"
          src={currentSchool?.imageURL}
          alt="school-img"
        />
        <Tabs className="tabs" type="card">
          <TabPane tab="Our Trainers" key="1">
            <div
              id="scrollableDiv"
              style={{
                height: 400,
                overflow: "auto",
                padding: "0 16px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
              }}
            >
              <List
                className="trainersList"
                itemLayout="horizontal"
                dataSource={currentSchool?.trainers}
                renderItem={(trainer) => (
                  <List.Item key={trainer}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size="large"
                          style={{ backgroundColor: "#9700d2 " }}
                        >
                          {trainer[0]}
                        </Avatar>
                      }
                      title={<a href="https://ant.design">{trainer}</a>}
                      description="To put the Dance Styles heree"
                    />
                    <div>
                      <LikeTwoTone
                        twoToneColor="#0595f5"
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </TabPane>
          <TabPane tab="Dance Styles" key="2">
            <p>
              Here at {currentSchool?.name} you can learn the following dance
              styles:
            </p>
            {currentSchool?.danceStyles?.map((danceStyle) => (
              <Tag
                color={tagColors[Math.floor(Math.random() * tagColors.length)]}
                style={{
                  fontSize: "15px",
                  margin: "10px",
                }}
              >
                #{danceStyle}
              </Tag>
            ))}
          </TabPane>
          <TabPane tab="UpcomingEvents" key="3">
            Eventsssss
          </TabPane>
        </Tabs>
      </div>
      <h3>Trainers:</h3>
      {currentSchool?.trainers?.map((trainer) => (
        <div>{trainer}</div>
      ))}
      <h3>Dance Styles:</h3>
      {currentSchool?.danceStyles?.map((danceStyle) => (
        <div>{danceStyle}</div>
      ))}
      <h3>Likes: {currentSchool?.likes}</h3>
    </div>
  );
}
