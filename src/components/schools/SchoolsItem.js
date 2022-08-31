import { Tabs, Avatar, List, Modal, Tag } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { getSchoolById, updateSchoolLikes, getBySchool } from "./schoolsSlice";
import { updateTrainerLikes } from "../trainers/trainersSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Courses from "../courses/Courses";
import CalendarPage from "./CalendarPage";
import { useNavigate } from "react-router-dom";
import EditSchool from "./EditSchool";
import {
  InstagramFilled,
  LikeFilled,
  LinkOutlined,
  TwitterOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./SchoolsItem.css";

const { TabPane } = Tabs;

export default function SchoolsItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const schoolId = params.schoolId;
  const { currentSchool, trainersForThisSchool } = useSelector(
    (state) => state.schools
  );

  useEffect(() => {
    dispatch(getSchoolById(schoolId));
    dispatch(getBySchool(schoolId));
  }, [schoolId]);

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

  return (
    <div>
      <div className="header">
        <div className="headerIconsSchool">
          <div className="iconInsta">
            <InstagramFilled />
          </div>
          <div className="iconLike">
            <LikeFilled onClick={() => dispatch(updateSchoolLikes(schoolId))} />
          </div>
          <div className="iconLink">
            <LinkOutlined />
          </div>
          <div className="iconTwitter">
            <TwitterOutlined />{" "}
          </div>
        </div>
        <div className="headerContent">
          <EditOutlined
            className="editButton"
            style={{ fontSize: "17px" }}
            onClick={showModal}
          />
          <Modal
            title="New School"
            visible={isModalVisible}
            footer={null}
            width={1000}
            onCancel={handleCancel}
          >
            <EditSchool closeModal={() => setIsModalVisible(false)} />
          </Modal>
          <h1 className="headerContentTitle">{currentSchool?.name}</h1>
          <h1 className="headerContentBody">{currentSchool?.description}</h1>
          <p>Liked by: {currentSchool?.likes} people</p>
        </div>
      </div>
      <div className="imgAndTabs">
        <div>
          <img
            className="headerImg"
            src={currentSchool?.imageURL}
            alt="school-img"
          />
        </div>
        <Tabs className="antTabs" type="card">
          <TabPane tab="Trainers" key="1">
            <div
              id="scrollableDiv"
              style={{
                padding: "0 16px",
              }}
            >
              <List
                className="trainersList"
                itemLayout="horizontal"
                dataSource={trainersForThisSchool}
                renderItem={(trainer, index) => (
                  <List.Item key={index}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size="large"
                          style={{ backgroundColor: "#9700d2 " }}
                        >
                          {trainer.firstName[0]}
                        </Avatar>
                      }
                      title={
                        <p
                          onClick={() => navigate(`/trainers/${trainer.id}`)}
                          style={{ cursor: "pointer" }}
                        >
                          {trainer.firstName} {trainer.lastName}
                        </p>
                      }
                      description={trainer.danceStyles?.map((dance) => (
                        <Tag
                          color={
                            tagColors[
                              Math.floor(Math.random() * tagColors.length)
                            ]
                          }
                        >
                          #{dance}
                        </Tag>
                      ))}
                    />
                    <div style={{ color: "#0595f5" }}>
                      <LikeTwoTone
                        twoToneColor="#0595f5"
                        style={{
                          fontSize: "20px",
                        }}
                        onClick={() => dispatch(updateTrainerLikes(trainer.id))}
                      />
                      {trainer.likes}
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </TabPane>
          <TabPane
            tab="
          Courses"
            key="3"
          >
            <Courses schoolId={schoolId} />
          </TabPane>
          <TabPane tab="Calendar" key="2">
            <CalendarPage />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
