import React from "react";
import { Input, List, Card, Tag } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedSchool } from "../schools/schoolsSlice";
import { useNavigate } from "react-router-dom";
import "./SearchComponent.css";

const { Search } = Input;
const { Meta } = Card;

export default function SearchBySchool() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchedSchools } = useSelector((state) => state.schools);

  const onSearchSchools = (value) => {
    dispatch(getSearchedSchool(value));
  };

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
    <div id="searchComponent">
      <div className="seachInput">
        <Search
          onSearch={onSearchSchools}
          enterButton="Search"
          size="large"
          placeholder="Search for the best school for you"
        />
      </div>
      {searchedSchools.length > 0 ? (
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
        dataSource={searchedSchools}
        renderItem={(school, index) => (
          <List.Item key={school}>
            <Card
              className="searchCard"
              cover={
                <img
                  style={{ height: "350px" }}
                  alt="example"
                  src={school.imageURL}
                />
              }
              actions={[
                <p className="schoolCardFooter">
                  Trainers: {school.trainers?.length}
                </p>,
                <p className="schoolCardFooter">Courses:{}</p>,
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <LikeTwoTone
                    twoToneColor="#0595f5" size="large"
                  />
                  <p style={{ color: "#0595f5" }}>{school.likes}</p>
                </div>,
              ]}
            >
              <Meta
                className="schoolCardMeta"
                title={school.name}
                onClick={() => {
                  navigate(`/schools/${school.id}`);
                }}
                description={school.danceStyles?.map((danceStyle) => (
                  <Tag
                    color={
                      tagColors[Math.floor(Math.random() * tagColors.length)]
                    }
                  >
                    #{danceStyle}
                  </Tag>
                ))}
              />
            </Card>
          </List.Item>
        )}
      />
      ) : null}
    </div>
  );
}
