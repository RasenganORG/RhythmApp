import React from "react";
import { Avatar, Tooltip, Row, Col } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./EventsCard.css";

export default function EventsCard(props) {
  const { event } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/events/${event.id}`)} className="eventCard">
      <div className="eventCardHeader">
        <h3>
          <b>{event.title}</b>
        </h3>
        <p>Number of spots</p>
      </div>
      <div className="eventCardBody">
        <div className="eventCardBodyTrainers">
          <Row>
            <Col span={18}>
              <p className="eventCardTrainersTitle">
                <i className="icofont icofont-user-alt-1"></i>
                <b>Trainers:</b>
              </p>
              <Avatar.Group
                maxCount={2}
                size="small"
                maxStyle={{
                  color: "white",
                  backgroundColor: "#f56a00",
                }}
                maxPopoverTrigger="hover"
                style={{ marginLeft: "1%" }}
              >
                {event.trainers.map((trainer) => (
                  <div className="avatarTrainers">
                    <Tooltip title={trainer} placement="top" key={trainer}>
                      <Avatar
                        style={{
                          color: "#f56a00",
                          backgroundColor: "#ffe8c4",
                        }}
                      >
                        {trainer[0]}
                      </Avatar>
                    </Tooltip>

                    <p>{trainer}</p>
                  </div>
                ))}
              </Avatar.Group>
            </Col>
            <Col className="available" span={6}>
              <div>
                Available: <b>{event.currentNumberOfParticipants}</b>
              </div>
            </Col>
          </Row>
        </div>
        <div className="eventCardBodyLocation">
          <Row>
            <Col span={18}>
              <p className="locationName">
                <i className="icofont icofont-tack-pin"></i>
                <b>Location: {event.location}</b>
              </p>
            </Col>
            <Col className="outOf" span={6}>
              Out of: <b>{event.initialNumberOfParticipants}</b>
            </Col>
          </Row>
        </div>
      </div>
      <div className="eventCardFooter">
        {moment().diff(event.date, "minutes") < 0 ? (
          <p>
            Starts {moment(event.date, "YYYY-MM-DD").fromNow()} (
            {moment(event.date).format("MMM Do YY")}){" "}
          </p>
        ) : (
          <p>
            Ended {moment(event.date, "YYYY-MM-DD").fromNow()} (
            {moment(event.date).format("MMM Do YY")}){" "}
          </p>
        )}
      </div>
    </div>
  );
}
