import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List, Avatar, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCourseById } from "./CoursesSlice";
import "./CoursesItem.css";
import CalendarPage from "../schools/CalendarPage";
import { Image } from "antd";
import { LikeFilled, LinkOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function CourseItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const courseId = params.courseId;
  const currentCourse = useSelector((state) => state.courses.currentCourse);
  const { schools } = useSelector((state) => state.schools);
  const schoolId = currentCourse.schoolId;
  const school = schools.filter((school) => school.id === schoolId);
  const navigate = useNavigate();
  const [size, setSize] = useState("small");
  useEffect(() => {
    dispatch(getCourseById(courseId));
  }, []);

  const handleClick = () => {
    navigate(`/schools/${school[0].id}`);
  };
  return (
    <>
      <div className="headerCourse">
        <div className="headerIconsCourse">
          <div className="likeCourse iconCourse">
            <LikeFilled />
          </div>
          <div className="linkCourse iconCourse">
            <LinkOutlined />
          </div>
        </div>
        <div className="headerCourseContent">
          <div className="headerCourseTitle">{currentCourse.title}</div>
          <div className="headerCourseSchool" onClick={handleClick}></div>
          <div>
            Maximum Number Of Participants:{" "}
            {currentCourse.maxNumberOfParticipants}
          </div>
        </div>
      </div>

      <div className="imgAndCollapse">
        <div className="images">
          <Image
            style={{ width: "40vw" }}
            className="firstImage"
            src={currentCourse.imagesURL}
          />
          <div className="smallImages">
            {currentCourse.imagesURL?.map((img) => (
              <Image width={150} src={img} alt="" />
            ))}{" "}
          </div>
        </div>

        <Tabs className="tabs" defaultActiveKey="1" type="card" size={size}>
          <TabPane tab="Description" key="1">
            <div>{currentCourse.description}</div>
          </TabPane>
          <TabPane tab="See the trainers" key="2">
            <List
              itemLayout="horizontal"
              dataSource={currentCourse.trainers}
              renderItem={(trainer) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: "#9700d2 " }}>
                        {trainer[0]}
                      </Avatar>
                    }
                    title={<a href="https://ant.design">{trainer}</a>}
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="See the calendar" key="3">
            <CalendarPage />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}
