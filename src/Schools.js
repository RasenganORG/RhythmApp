import React from "react";
import "./Schools.css";
import { Input, Space } from "antd";
import Navbar from "./Navbar";
import CardEvent from "./CardEvent";
import InfoCard from "./InfoCard";

export default function Schools() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Navbar />
      <CardEvent />
      <div className="space">
        {/* Search bar */}
        <Space direction="vertical" className="search-bar">
          <Search
            className="search-bar"
            placeholder="Search School"
            onSearch={onSearch}
          />
        </Space>
      </div>
      {/* card for every school */}
      <InfoCard />

{/*       
      <InfoCard
        name={"School Name"}
        firstDevider={"Dance Styles"}
        secondDevider={"Trainers"}
        firstData={firstSchoolsData}
        secondData={secondSchoolsData}
      /> */}
    </div>
  );
}
