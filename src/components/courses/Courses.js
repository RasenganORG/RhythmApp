import React from "react";
import { List, Avatar, Space, Card, Tag, Modal, Button } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { getCourses } from "./CoursesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CreateEvent from "../events/CreateEvent";
import { useNavigate } from "react-router-dom";
import CreateCourse from "./CreateCourse";
import "./Courses.css"

export default function Courses({ schoolId }) {
  const { courses, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.courses
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div>
      <CreateCourse />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 3,
          xxl: 3,
        }}
        dataSource={courses}
        renderItem={(course) =>
          course.schoolId === schoolId ? (
            <List.Item key={course}>
              <Card className="coursesCard"
                title={course.title}
                onClick={() => {
                  navigate(`${course.id}`);
                }}
              >
                {course.description}
              </Card>
            </List.Item>
          ) : null
        }
      />
    </div>
  );
}
