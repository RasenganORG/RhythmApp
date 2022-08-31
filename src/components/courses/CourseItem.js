import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List, Avatar, Tabs, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getByCourseId,
  getCourseById,
  updateCourseLikes,
} from "./CoursesSlice";
import "./CoursesItem.css";
import CalendarPage from "../schools/CalendarPage";
import { Image } from "antd";
import { LikeFilled, LinkOutlined, EditOutlined } from "@ant-design/icons";
import EditCourse from "./EditCourse";

const { TabPane } = Tabs;

export default function CourseItem() {
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
  const courseId = params.courseId;
  const { currentCourse, trainersForThisCourse } = useSelector(
    (state) => state.courses
  );
  const { schools } = useSelector((state) => state.schools);
  const schoolId = currentCourse.schoolId;
  const school = schools.filter((school) => school.id === schoolId);
  const [size, setSize] = useState("small");

  useEffect(() => {
    dispatch(getCourseById(courseId)); //all courses
    dispatch(getByCourseId(courseId)); //tabela intermediara
  }, []);

  const handleClick = () => {
    navigate(`/schools/${school[0].id}`);
  };

  return (
    <>
      <div className="headerCourse">
        <div className="headerIconsCourse">
          <div className="likeCourse iconCourse">
            <LikeFilled onClick={() => dispatch(updateCourseLikes(courseId))} />
          </div>
          <div className="linkCourse iconCourse">
            <LinkOutlined />
          </div>
        </div>
        <div className="headerCourseContent">
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
            <EditCourse closeModal={() => setIsModalVisible(false)} />
          </Modal>
          <div className="headerCourseTitle">{currentCourse.title}</div>
          <div className="headerCourseSchool" onClick={handleClick}></div>
          <div>
            <p>
              Maximum Number Of Participants:{" "}
              {currentCourse.maxNumberOfParticipants}
            </p>
            <p>Liked By: {currentCourse.likes} people</p>
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
              dataSource={trainersForThisCourse}
              renderItem={(trainer) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: "#9700d2 " }}>
                        {trainer.firstName[0]}
                      </Avatar>
                    }
                    title={
                      <p onClick={() => navigate(`/trainers/${trainer.id}`)}>
                        {trainer.firstName} {trainer.lastName}
                      </p>
                    }
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
