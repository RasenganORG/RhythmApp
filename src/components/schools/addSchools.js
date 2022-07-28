import { Col, Row, Button, Form, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import { useState } from "react";
import { addSchool } from "./schoolsSlice";
import { useSelector, useDispatch } from "react-redux";

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

export default function AddSchool() {

  const schools = useSelector((state) => state.schools.schools);
  const dispatch = useDispatch();

  const [newSchool, setNewSchool] = useState({
    name: "",
    likes: 0,
    trainers: [
      {
        trainerName: "",
        trainerPicture: "",
      },
    ],
  });

  const onFinish = (values) => {
   
    // console.log(newSchool)
    const newSchool = {...values}
    console.log(newSchool)
    dispatch(addSchool(newSchool))
  };

  return (
    <div>
      <h1 className="add-school-title">Add a New School</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name={"name"}
              label="School Name"
             // onChange={(e) => setNewSchool({ ...newSchool, name: e.target.value })}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"likes"}
              label="Description"
              // onChange={(e) =>
              //   setNewSchool({ ...newSchool, description: e.target.value })
              // }
            >
              <Input.TextArea />
            </Form.Item>
            <FormItem name={"type"}></FormItem>
          </Col>
          <Col span={12}>
            <Form.List name="trainer">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      // onChange={(e) =>
                      //   setNewSchool({ ...newSchool, trainers: [e.target.value] })
                      // }
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

            {/* <Form.List name="dance-styles">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Dance Styles:" : ""}
                      required={false}
                      key={field.key}
                      // onChange={(e) =>
                      //   setNewSchool({ ...newSchool, danceStyles: e.target.value })
                      // }
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        noStyle
                      >
                        <Input
                          placeholder="dance style"
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
                        Add Dance Styles
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List> */}
          </Col>
        </Row>
        <div className="submit-button">
          <Button type="primary" htmlType="submit">
            Add School
          </Button>
        </div>
      </Form>
    </div>
  );
}
