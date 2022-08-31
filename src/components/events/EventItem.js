import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById, updateEventLikes } from "./EventsSlice";
import { Divider } from "antd";
import { EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { Row, Col, Modal } from "antd";
import "./EventItem.css";
import EventsCard from "./EventsCard";
import EditEvent from "./EditEvent"

export default function EventItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();
  const params = useParams();
  const eventId = params.eventId;
  const currentEvent = useSelector((state) => state.events.currentEvent);
  const events = useSelector((state) => state.events.events);
  const pastEvents = events.filter(
    (event) =>
      moment().diff(event.startDate, "minutes") > 0 &&
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
            <EditOutlined
              className="editButton"
              style={{ fontSize: "17px" }}
              onClick={showModal}
            />
            <Modal
              title="New School"
              visible={isModalVisible}
              footer={null}
              width={1000}
              onCancel={handleCancel}
            >
              <EditEvent closeModal={() => setIsModalVisible(false)} />
            </Modal>
            <h1 className="eventMainTitle">{currentEvent.title}</h1>
            <div className="eventMainDate">
              <i className="icofont icofont-ui-calendar" />
              <p>{moment(currentEvent.startDate).format("MMM Do YY")}</p>
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
              {currentEvent.currentNumberOfParticipants > 0 &&
              moment().diff(currentEvent.startDate, "minutes") < 0 ? (
                <>
                  <Divider orientation="center">Available Spots</Divider>
                  <div className="eventAvailableSpots">
                    {currentEvent.currentNumberOfParticipants} available spots
                    for this event
                  </div>
                  <button
                    className="eventParticipateButton"
                    onClick={() => dispatch(updateEventLikes(eventId))}
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
