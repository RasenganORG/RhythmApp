import React, { useEffect, useState } from "react";
import { Input, Avatar, Form, message, DatePicker } from "antd";
import { getTrainers } from "../trainers/trainersSlice";
import { editEvent, getEventById } from "./EventsSlice";
import FormItem from "antd/lib/form/FormItem";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

export default function EditEvent({ closeModal }) {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  
  const [form] = Form.useForm();
  const { currentEvent } = useSelector((state) => state.events);
  const trainers = useSelector((state) => state.trainers.trainers);
  const params = useParams();
  const eventId = params.eventId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;
  const [value, setValue] = useState("Event");

  useEffect(() => {
    dispatch(getEventById(eventId));
    dispatch(getTrainers());
  }, []);

  const onChangeDatePicker = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinishEvent = (values) => {
    const newEvent = {
      ...values,
      schoolId: currentEvent.schoolId,
      type: currentEvent.type,
      currentNumberOfParticipants: values.initialNumberOfParticipants,
      id: eventId,
    };
    dispatch(editEvent(newEvent));
    message.success(`Your ${value} has been successfully updated!`);
    form.resetFields();
    navigate(`/events/${eventId}`);
    closeModal();
  };

  return (
    <div>
      {Object.keys(currentEvent).length !== 0 && (
        <Form
          initialValues={{
            title: currentEvent.title,
            description: currentEvent.description,
            date: moment(currentEvent.date),
            type: currentEvent.type,
            trainers: currentEvent.trainers,
            initialNumberOfParticipants:
              currentEvent.initialNumberOfParticipants,
            currentNumberOfParticipants:
              currentEvent.currentNumberOfParticipants,
            location: currentEvent.location,
            schoolId: currentEvent.schoolId,
            imageURL: currentEvent.imageURL,
          }}
          form={form}
          style={{ width: "60%" }}
          name="nest-messages"
          onFinish={onFinishEvent}
          validateMessages={validateMessages}
          className="createEventForm"
        >
          <Form.Item
            name={"title"}
            label={`${currentEvent.type} Title`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"description"}
            label={`${currentEvent.type} Description`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"date"}
            label={`${currentEvent.type} Date`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker onChange={onChangeDatePicker} />
          </Form.Item>
          <FormItem
            name={"trainers"}
            label="Select Trainers"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="tags"
              style={{
                width: "100%",
              }}
              placeholder="Select Trainers"
            >
              {trainers.map((trainer) => (
                <Option key={trainer.firstName}>
                  <div>
                    <Avatar
                      style={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                      }}
                      size="small"
                    >
                      {trainer.firstName[0]}
                    </Avatar>
                    {trainer.firstName} {trainer.lastName}
                  </div>
                </Option>
              ))}
            </Select>
          </FormItem>
          <Form.Item
            name={"initialNumberOfParticipants"}
            label="The maximum number of participants"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"location"}
            label="Location"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"imageURL"}
            label="Image URL"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="submit-button">
            <button
              className="addSchoolsButton"
              type="primary"
              htmlType="submit"
            >
              Update {currentEvent.type}
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
