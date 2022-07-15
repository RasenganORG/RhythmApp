import React, { useState } from "react";
import "./CreateEvent.css";
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

export default function CreateEvent() {
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
    <div>
      <Navbar />
      <h1 className="create-event-title">Create a New Event</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name={"eventName"}
              label="Event Name"
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
            <Form.Item name={"eventDescription"} label="Description">
              <Input.TextArea />
            </Form.Item>
            <FormItem name={"type"}>
              <div className="radio-group">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={"party"}>Party</Radio>
                  <Radio value={"course"}>Course</Radio>
                </Radio.Group>
              </div>
            </FormItem>
          </Col>
          <Col span={12}>
            <Form.List name="trainers">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Trainers:" : ""}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        noStyle
                      >
                        <Input
                          placeholder="trainer name"
                          style={{
                            width: "60%",
                          }}
                        />
                      </Form.Item>
                      {fields.length >= 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <div className="dashed-button">
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          width: "60%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Trainers
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>
          </Col>
        </Row>
        <div className="submit-button">
          <Button type="primary" htmlType="submit">
            Create Event
          </Button>
        </div>
      </Form>
    </div>
  );
}
