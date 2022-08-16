import React, { useState, useEffect } from "react";
import { Button } from "antd";
import ItemsCarousel from "react-items-carousel";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import moment from 'moment'
import "./Events.css";
import EventsCard from "./EventsCard";
import { getEvents } from "./EventsSlice";

export default function Events() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  const upcomingEvents = events.filter((event) => (moment().diff(event.date, "minutes") < 0))
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div style={{ padding: '0 25px' }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        leftChevron={
          <Button shape="circle" size="large" className="back-button">
            <LeftOutlined />
          </Button>
        }
        rightChevron={
          <Button shape="circle" size="large" className="forword-button">
            <RightOutlined />
          </Button>
        }
        outsideChevron
        chevronWidth={0}
      >
        {upcomingEvents.map((event) => (
          <EventsCard event={event} />
        ))}
      </ItemsCarousel>
    </div>
  );
}
