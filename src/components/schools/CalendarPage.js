import React, { useEffect } from "react";
import { Badge, Calendar } from "antd";
import CreateEvent from "../events/CreateEvent";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../events/EventsSlice";
import './CalendarPage.css'
import { useNavigate } from "react-router-dom";

export default function CalendarPage() {
  const navigate = useNavigate()
  const onPanelChange = (value, mode) => {
  };
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const getListData = (value) => {
    const listData = [];
    let dateValue = value.format("yyyy-MM-DD");
    events.map((event) => {
      if (dateValue === event.date.substring(0, 10)) {
        listData.push({
          type: "success",
          content: `${event.title}`,
          eventId: event.id,
        });
      }
    });
    return listData;
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

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
    <div>
      <CreateEvent />
      <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
    </div>
  );
}
