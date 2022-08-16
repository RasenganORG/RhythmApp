import { Button, Form, Input, Avatar, message } from "antd";
import { useState } from "react";
import FormItem from "antd/lib/form/FormItem";
import { createNews } from "./NewsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Select, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

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

export default function AddNews({ closeModal }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { Option } = Select;

  const onFinish = (values) => {
    const newNews = { ...values, likes: "0", date: moment().format("MMM Do YY") };
    dispatch(createNews(newNews));
    navigate("/news");
    message.success("Your news has been successfully added!");
    form.resetFields();
    closeModal();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="add-school-title">Add a New School</h1>
      <Form
        form={form}
        style={{ width: "60%" }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"title"}
          label="News Title"
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
          <Input.TextArea />
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
        <Form.Item
          name={"author"}
          label="Author Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="submit-button">
          <button className="addSchoolsButton" type="primary" htmlType="submit">
            Add News
          </button>
        </div>
      </Form>
    </div>
  );
}
