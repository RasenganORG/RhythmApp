import React, { useState } from "react";
import Navbar from "./Navbar";
import "./CalendarPage.css";
import { Badge, Calendar } from "antd";
import { DatePicker, Space } from "antd";
import { Button, Radio } from "antd";
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

// For day picker

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const onOk = (value) => {
  console.log("onOk: ", value);
};

// For calendar
const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;

    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;

    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event。。....",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarPage = () => {
  const[date, changeDate] = useState()

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div >
      <Navbar />
      <div className="calendar">
      <h2>Available Dates</h2>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      </div>
      <div className="button-and-picker">
        <div className="picker">
          <p>Book a day</p>
          <Space direction="vertical" size={12}>
            <DatePicker onChange={onChange} />
          </Space>
        </div>
        <Link to="/congrats">
          <Button type="default" shape="round" className="card-button" >
            Book!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CalendarPage;
