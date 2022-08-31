import React, { useState } from "react";
import { Input, List, Card } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedCourse, updateCourseLikes } from "../courses/CoursesSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./SearchComponent.css";

const { Search } = Input;
const { Meta } = Card;

export default function SearchByCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchedCourses } = useSelector((state) => state.courses);

  const onSearchCourses = (value) => {
    dispatch(getSearchedCourse(value));
  };

  
  return (
    <div id="searchComponent">
      <div className="seachInput">
        <Search
          onSearch={onSearchCourses}
          enterButton="Search"
          size="large"
          placeholder="Search for the best course for you"
        />
      </div>
      {searchedCourses.length > 0 ? (
        <List
          grid={{
            gutter: 32,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 5,
          }}
          className="searchList"
          dataSource={searchedCourses}
          renderItem={(course, index) => (
            <List.Item key={course}>
              <Card
                className="searchCard"
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    style={{ height: "300px" }}
                    alt="example"
                    src={course.imagesURL[0]}
                  />
                }
                actions={[
                  <p className="searchCardFooter">
                    Every {course.day} from{" "}
                    {moment(course.StartHour).format("h:mm")} to{" "}
                    {moment(course.EndHour).format("h:mm")}
                  </p>,
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LikeTwoTone
                      twoToneColor="#0595f5"
                      size="large"
                      className="searchLikeButton"
                      // onClick={() => dispatch(updateCourseLikes(course.id))}
                    />
                    <p style={{ color: "#0595f5" }}>{course.likes}</p>
                  </div>,
                ]}
              >
                <Meta
                  className="searchCardMeta"
                  title={course.title}
                  onClick={() => {
                    navigate(`/schools/${course.schoolId}/${course.id}`);
                  }}
                  description={course.description}
                />
              </Card>
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
}
