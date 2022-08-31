import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTrainers } from "../trainers/trainersSlice";
import { getCourseById, editCourse } from "./CoursesSlice";
import { Input, Avatar, Form, message, TimePicker, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import moment from "moment";

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

export default function EditCourse({ closeModal }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const params = useParams();
  const { currentCourse } = useSelector((state) => state.courses);
  const trainers = useSelector((state) => state.trainers.trainers);
  const { Option } = Select;
  const [value, setValue] = useState("");
  const courseId = params.courseId;
  const schoolId = currentCourse.schoolId;

  useEffect(() => {
    dispatch(getCourseById(courseId));
    dispatch(getTrainers());
  }, []);

  const onFinish = (values) => {
    const newCourse = {
      ...values,
      danceStyles: values.danceStyles.map((dance) => dance.toLowerCase()),
      likes: 0,
      schoolId: schoolId,
    };
    dispatch(editCourse(newCourse));
    message.success("Your course has been successfully updated!");
    form.resetFields();
    closeModal();
  };

  return (
    <div>
      {Object.keys(currentCourse).length !== 0 && (
        <Form
          initialValues={{
            title: currentCourse.title,
            schoolId: currentCourse.schoolId,
            description: currentCourse.description,
            likes: currentCourse.likes,
            maxNumberOfParticipants: currentCourse.maxNumberOfParticipants,
            trainers: currentCourse.trainers,
            danceStyles: currentCourse.danceStyles,
            day: currentCourse.day,
            EndHour: moment(currentCourse.EndHour),
            StartHour: moment(currentCourse.StartHour),
            imagesURL: currentCourse.imagesURL,
          }}
          form={form}
          style={{ width: "60%" }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="createEventForm"
        >
          <Form.Item
            name={"title"}
            label="Course Title"
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
            label="Course Description"
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
          <FormItem
            name={"danceStyles"}
            label="Select Dance Styles"
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
              placeholder="Select Dance Styles"
            >
              {danceStyles.map((danceStyle) => (
                <Option key={danceStyle}>{danceStyle}</Option>
              ))}
            </Select>
          </FormItem>
          <FormItem
            name={"day"}
            label="Select the day"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              defaultValue=""
              style={{
                width: 120,
              }}
            >
              {daysOfTheWeek.map((day) => (
                <Option value={day} />
              ))}
            </Select>
          </FormItem>
          <FormItem
            name={"StartHour"}
            label="Select the start hour"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TimePicker />
          </FormItem>
          <FormItem
            name={"EndHour"}
            label="Select the end hour"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TimePicker />
          </FormItem>

          <Form.Item
            name={"maxNumberOfParticipants"}
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
            <button
              className="addSchoolsButton"
              type="primary"
              htmlType="submit"
            >
              Update Course
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
