import React, { useState, useEffect } from "react";
import {
  Input,
  Avatar,
  Form,
  Modal,
  Button,
  message,
  Radio,
  DatePicker,
  TimePicker,
} from "antd";
import { createEvent } from "./EventsSlice";
import { getTrainers } from "../trainers/trainersSlice";
import FormItem from "antd/lib/form/FormItem";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useParams } from "react-router-dom";
import CreateEventCourse from "./CreateEventCourse";
import moment from "moment";

export default function CreateEvent() {
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
  const trainers = useSelector((state) => state.trainers.trainers);
  const params = useParams();
  const schoolId = params.schoolId;
  const dispatch = useDispatch();
  const { Option } = Select;
  const [value, setValue] = useState("Course");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinishEvent = (values) => {
    const newEvent = {
      ...values,
      schoolId: schoolId,
      type: value,
      startHour: moment(values.startHour).format("h:mm:ss"),
      endHour: moment(values.endHour).format("h:mm:ss"),
      currentNumberOfParticipants: values.initialNumberOfParticipants,
    };
    dispatch(createEvent(newEvent));
    message.success(`Your ${value} has been successfully added!`);
    form.resetFields();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button onClick={showModal}>Create Event</Button>
      <Modal
        title="Create a New Event"
        visible={isModalVisible}
        footer={null}
        width={1000}
        onCancel={handleCancel}
      >
        <div>Please choose event type:</div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"Course"}>Course</Radio>
          <Radio value={"Party"}>Party</Radio>
          <Radio value={"Competition"}>Competition</Radio>
          <Radio value={"Other"}>Other</Radio>
        </Radio.Group>
        {value === "Course" ? (
          <CreateEventCourse />
        ) : (
          <Form
            form={form}
            style={{ width: "60%" }}
            name="nest-messages"
            onFinish={onFinishEvent}
            validateMessages={validateMessages}
            className="createEventForm"
          >
            <Form.Item
              name={"title"}
              label={`Title`}
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
              label={`Description`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
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
              name={"startDate"}
              label={`Start Date`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name={"endDate"}
              label={`End Date`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <FormItem
              name={"startHour"}
              label="Start hour"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TimePicker />
            </FormItem>
            <FormItem
              name={"endHour"}
              label="End hour"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TimePicker />
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
                Add {value}
              </button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
}
