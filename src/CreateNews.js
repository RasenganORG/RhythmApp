import React, { useState } from "react";
import "./CreateNews.css";
import Navbar from "./Navbar";
import {
  Col,
  Row,
  Radio,
  DatePicker,
  Button,
  Form,
  Input,
  InputNumber,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

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

export default function CreateNews() {
  // radio button
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // form
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div >
      <Navbar />
      <div className="create-news">
      <h1 className="create-event-title">Create News</h1>
      <Form className="form"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"newsTitle"}
          label="News Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item name={"newsText"} label="Insert here the text">
          <Input.TextArea />
        </Form.Item>

        <div className="submit-button">
          <Button type="primary" htmlType="submit">
            Create News
          </Button>
        </div>
      </Form>
      </div>
    </div>
  );
}
