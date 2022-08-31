import React, { useEffect } from "react";
import { Badge, Calendar } from "antd";
import CreateEvent from "../events/CreateEvent";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../events/EventsSlice";
import "./CalendarPage.css";
import moment from "moment";

export default function CalendarPage() {
  const onPanelChange = (value, mode) => {};
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const getListData = (value) => {
    const listData = [];
    let dateValue = value.format("yyyy-MM-DD");
    events.map((event) => {
      const startDate = moment(event.startDate).format("YYYY-MM-DD");
      const endDate = moment(event.endDate).format("YYYY-MM-DD");
      if (
        moment(dateValue).isBetween(startDate, endDate) ||
        moment(dateValue).isSame(startDate) ||
        moment(dateValue).isSame(endDate)
      ) {
        event.type === "Course"
          ? listData.push({
              type: "blue",
              content: `${event.title}`,
              eventId: event.id,
            })
          : event.type === "Party"
          ? listData.push({
              type: "magenta",
              content: `${event.title}`,
              eventId: event.id,
            })
          : event.type === "Competition"
          ? listData.push({
              type: "gold",
              content: `${event.title}`,
              eventId: event.id,
            })
          : listData.push({
              type: "lime",
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
    <div id="calendarPage">
      <CreateEvent />
      <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
    </div>
  );
}
