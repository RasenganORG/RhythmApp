import React, { useState } from "react";
import { Radio } from "antd";
import SearchByCourse from "./SearchByCourse";
import "./SearchComponent.css";
import SearchBySchool from "./SearchBySchool";

export const SearchComponent = () => {
  const [radioValue, setRadioValue] = useState("Courses");

  const onChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div id="searchComponent">
      <div className="radioButtons">
        <Radio.Group
          onChange={onChange}
          value={radioValue}
          defaultValue={"Courses"}
          buttonStyle="solid"
        >
          <Radio value={"Courses"}>Search For Courses</Radio>
          <Radio value={"Schools"}>Search For Schools</Radio>
        </Radio.Group>
      </div>

      {radioValue === "Courses" ? <SearchByCourse /> : <SearchBySchool />}
    </div>
  );
};

export default SearchComponent;
