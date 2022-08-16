import React, { useState } from "react";
import {
  Input,
  Avatar,
  Form,
  Modal,
  Button,
  message,
  Radio,
  DatePicker,
} from "antd";
import { createEvent } from "./EventsSlice";
import FormItem from "antd/lib/form/FormItem";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useParams } from "react-router-dom";

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
  const [value, setValue] = useState("Event");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeDatePicker = (date, dateString) => {
    console.log(date, dateString);
  };

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
          <Radio.Button value={"Event"}>Event</Radio.Button>
          <Radio.Button value={"Party"}>Party</Radio.Button>
          <Radio.Button value={"Competition"}>Competition</Radio.Button>
        </Radio.Group>
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
            label={`${value} Title`}
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
            label={`${value} Description`}
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
            label={`${value} Date`}
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
                <Option key={trainer.trainerName}>
                  <div>
                    <Avatar
                      style={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                      }}
                      size="small"
                    >
                      {trainer.trainerName[0]}
                    </Avatar>
                    {trainer.trainerName}
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
              Add {value}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
