import { Tag, Row, Col } from "antd";
import { getTrainerById, updateTrainerLikes } from "./trainersSlice";
import { getByTrainerId, getByTrainer } from "./trainersSlice.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./TrainerItem.css";
import { LikeTwoTone } from "@ant-design/icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TrainersItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const trainerId = params.trainerId;
  const { currentTrainer, coursesForThisTrainer, schoolsForThisTrainer } =
    useSelector((state) => state.trainers);

  useEffect(() => {
    dispatch(getTrainerById(trainerId));
    dispatch(getByTrainerId(trainerId));
    dispatch(getByTrainer(trainerId));
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
  return (
    <div className="tabs">
      <Row justify="space-between">
        <Col className="trainerLeftSide">
          <div className="leftUp">
            <div className="trainerCourses">
              <p className="trainerCoursesText">COURSES:</p>
              <p className="trainerCoursesNumber">
                {coursesForThisTrainer?.length}
              </p>
            </div>
          </div>
          <div className="leftDown">
            <img
              className="trainerProfileImg"
              src={currentTrainer.imageURL}
              alt=""
            />
          </div>
        </Col>
        <Col className="trainerRightSide">
          <p className="trainerFirstName">{currentTrainer.firstName}</p>
          <p className="trainerLastName">{currentTrainer.lastName}</p>
          <div className="trainerLikes">
            <LikeTwoTone
              onClick={() => dispatch(updateTrainerLikes(trainerId))}
              twoToneColor="#7aabff"
              className="trainerLikeButton"
            />
            <p>Liked By {currentTrainer.likes} people</p>
          </div>

          <div className="trainerInfo">
            <div className="trainerAge">
              <p className="trainerInfoText">Age</p>
              <p className="trainerInfoNumber">{currentTrainer.age}</p>
            </div>
            <div className="trainerDanceStyles">
              <p className="trainerInfoText">Dance Styles</p>
              <p className="trainerInfoNumber">
                {currentTrainer?.danceStyles?.map((dance) => (
                  <Tag
                    color={
                      tagColors[Math.floor(Math.random() * tagColors.length)]
                    }
                  >
                    #{dance}
                  </Tag>
                ))}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Tabs>
        <TabList className="tabList">
          <Tab>Overview</Tab>
          <Tab>Courses</Tab>
          <Tab>Schools</Tab>
        </TabList>
        <TabPanel>
          <h2 className="trainerDescription">{currentTrainer.description}</h2>
        </TabPanel>
        <TabPanel>
          <h2>
            {coursesForThisTrainer?.map((course) => (
              <p
                onClick={() =>
                  navigate(`/schools/${course.schoolId}/${course.id}`)
                }
              >
                {course?.title}
              </p>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            {schoolsForThisTrainer?.map((school) => (
              <p onClick={() => navigate(`/schools/${school.id}`)}>
                {school?.name}
              </p>
            ))}
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
