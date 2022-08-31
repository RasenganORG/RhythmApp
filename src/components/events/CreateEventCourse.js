import React, { useEffect, useState } from "react";
import {
  Input,
  Select,
  Form,
  message,
  TimePicker,
  DatePicker,
  Avatar,
} from "antd";
import { getTrainers } from "../trainers/trainersSlice";
import { useSelector, useDispatch } from "react-redux";
import { createEvent } from "./EventsSlice";
import { useParams } from "react-router-dom";
import { getCourses } from "../courses/CoursesSlice";
import FormItem from "antd/lib/form/FormItem";

const { Option } = Select;

export default function CreateEventCourse() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const params = useParams();
  const schoolId = params.schoolId;
  const trainers = useSelector((state) => state.trainers.trainers);
  const [selectedCourse, setSelectedCourse] = useState({});
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    form.setFieldsValue(selectedCourse);
  }, [form, selectedCourse]);

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  const onFinish = (values) => {
    const newEvent = {
      ...values,
      type: "Course",
      currentNumberOfParticipants: values.initialNumberOfParticipants,
      likes: 0,
      schoolId: selectedCourse.schoolId,
    };
    dispatch(createEvent(newEvent));
    message.success("Your course has been successfully added!");
    form.resetFields();
    // closeModal();
  };

  const danceStyles = [
    "Rumba",
    "Samba",
    "Salsa",
    "Batchata",
    "Tango",
    "Jive",
    "Contemporary Dance",
    "Ballroom",
    "Contemporary",
    "Hip Hop",
    "Jazz",
    "Tap Dance",
    "Folk Dance",
    "Irish Dance",
  ];
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <Select
        defaultValue="Select Course"
        onChange={(value) => setSelectedCourse(courses[value])}
      >
        {courses?.map((course, index) =>
          course.schoolId === schoolId ? (
            <Option value={index} key={course.id}>
              {course.title}
            </Option>
          ) : null
        )}
      </Select>
      <Form
        initialValues={selectedCourse}
        form={form}
        style={{ width: "60%" }}
        name="nest-messages"
        onFinish={onFinish}
        className="createEventForm"
      >
        <Form.Item
          name={"title"}
          label="Title"
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
          label="Description"
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
          name={"imagesURL"}
          label="Images URL"
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
            placeholder="Upload Images"
          />
        </Form.Item>
        <div className="submit-button">
          <button className="addSchoolsButton" type="primary" htmlType="submit">
            Add Course
          </button>
        </div>
      </Form>
    </div>
  );
}
