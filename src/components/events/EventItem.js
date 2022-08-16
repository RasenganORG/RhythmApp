import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById, updateEvent } from "./EventsSlice";
import { Divider } from "antd";
import moment from "moment";
import { Row, Col } from "antd";
import "./EventItem.css";
import EventsCard from "./EventsCard";

export default function EventItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const eventId = params.eventId;
  const currentEvent = useSelector((state) => state.events.currentEvent);
  const events = useSelector((state) => state.events.events);
  const pastEvents = events.filter(
    (event) =>
      moment().diff(event.date, "minutes") > 0 &&
      event.type === currentEvent.type
  );

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, [params]);

  return (
    <div>
      <Row gutter={8}>
        <Col className="eventSidebar" span={6}>
          <h3 className="eventSidebarTitle">Similar Past Events</h3>
          {pastEvents.map((event) => (
            <EventsCard event={event} />
          ))}
        </Col>
        <Col className="eventMain" span={18}>
          <div className="eventMainHeader">
            <h1 className="eventMainTitle">{currentEvent.title}</h1>
            <div className="eventMainDate">
              <i className="icofont icofont-ui-calendar" />
              <p>{moment(currentEvent.date).format("MMM Do YY")}</p>
            </div>
            <div className="eventMainLocation">
              <i className="icofont icofont-tack-pin" />
              <p>{currentEvent.location}</p>
            </div>
          </div>
          <div className="eventBody">
            <img className="eventImg" src={currentEvent.imageURL} alt="" />
            <div className="eventBodyDescription">
              <Divider orientation="center">
                {currentEvent.type} Description
              </Divider>
              <p>{currentEvent.description}</p>
              {(currentEvent.currentNumberOfParticipants > 0 && moment().diff(currentEvent.date, "minutes") < 0) ? (
                <>
                  <Divider orientation="center">Available Spots</Divider>
                  <div className="eventAvailableSpots">
                    {currentEvent.currentNumberOfParticipants} available spots
                    for this event
                  </div>
                  <button
                    className="eventParticipateButton"
                    onClick={() => dispatch(updateEvent(eventId))}
                  >
                    Buy a ticket
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
