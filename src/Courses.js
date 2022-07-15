import React from "react";
import "./Courses.css";
import Navbar from "./Navbar";
import CardEvent from "./CardEvent";
import InfoCard from "./InfoCard";
import { Input, Space } from "antd";

export default function Courses() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const firstCoursesData = [
    "Trainer1",
    "Trainer2",
    "Trainer3",
    "Trainer4",
    "Trainer5",
  ];
  const secondCoursesData = [
    "Scchool1",
    "Scchool2",
    "Scchool3",
    "Scchool4",
    "Scchool5",
  ];

  return (
    <div>
      <Navbar />
      <CardEvent />

      {/* Search bar */}
      <div className="space">
        <Space direction="vertical" className="search-bar">
          <Search
            className="search-bar"
            placeholder="Search Course"
            onSearch={onSearch}
          />
        </Space>
      </div>

      {/* card for every course */}
      <InfoCard
        name={"Course Name"}
        firstDevider={"Trainers"}
        secondDevider={"Schools"}
        firstData={firstCoursesData}
        secondData={secondCoursesData}
      />
      <InfoCard
        name={"Course Name"}
        firstDevider={"Trainers"}
        secondDevider={"Schools"}
        firstData={firstCoursesData}
        secondData={secondCoursesData}
      />
      <InfoCard
        name={"Course Name"}
        firstDevider={"Trainers"}
        secondDevider={"Schools"}
        firstData={firstCoursesData}
        secondData={secondCoursesData}
      />
    </div>
  );
}
