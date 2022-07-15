import React from "react";
import "./Trainers.css";
import Navbar from "./Navbar";
import CardEvent from "./CardEvent";
import InfoCard from "./InfoCard";
import { Input, Space } from "antd";

function Trainers() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const firstTrainersData = [
    "Samba",
    "Tango",
    "Salsa",
    "Rumba",
    "Contemporary",
  ];
  const secondTrainersData = [
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
            placeholder="Search Trainer"
            onSearch={onSearch}
          />
        </Space>
      </div>

      {/* card for every trainer */}
      <InfoCard
        name={"Trainer Name"}
        firstDevider={"Dance Styles"}
        secondDevider={"Schools"}
        firstData={firstTrainersData}
        secondData={secondTrainersData}
      />
      <InfoCard
        name={"Trainer Name"}
        firstDevider={"Dance Styles"}
        secondDevider={"Schools"}
        firstData={firstTrainersData}
        secondData={secondTrainersData}
      />
      <InfoCard
        name={"Trainer Name"}
        firstDevider={"Dance Styles"}
        secondDevider={"Schools"}
        firstData={firstTrainersData}
        secondData={secondTrainersData}
      />
    </div>
  );
}

export default Trainers;
