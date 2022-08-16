import React, { useState } from "react";
import { Input, Avatar, Form, Modal, Button, message } from "antd";
import { createCourse } from "./CoursesSlice";
import FormItem from "antd/lib/form/FormItem";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useParams } from "react-router-dom";

export default function CreateCourse() {
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
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinishCourse = (values) => {
    const newCourse = { ...values, schoolId: schoolId };
    dispatch(createCourse(newCourse));
    message.success("Your course has been successfully added!");
    form.resetFields();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button onClick={showModal}>Create Course</Button>
      <Modal
        title="Create a New Course"
        visible={isModalVisible}
        footer={null}
        width={1000}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          style={{ width: "60%" }}
          name="nest-messages"
          onFinish={onFinishCourse}
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
              Add Course
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
