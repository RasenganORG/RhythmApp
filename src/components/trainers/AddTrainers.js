import { Form, Input, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { createTrainer } from "./trainersSlice";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import "../schools/addSchools.css";

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

export default function AddTrainer({ closeModal }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Option } = Select;

  const onFinish = (values) => {
    const newTrainer = { ...values, likes: "0", numberOfCourses: "0" };
    dispatch(createTrainer(newTrainer));
    navigate("/trainers");
    message.success("This trainer has been successfully added!");
    form.resetFields();
    closeModal();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="add-school-title">Add a New Trainer</h1>
      <Form
        form={form}
        style={{ width: "60%" }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"firstName"}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"lastName"}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"age"}
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
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
        <div className="submit-button">
          <button className="addSchoolsButton" type="primary" htmlType="submit">
            Add Trainer
          </button>
        </div>
      </Form>
    </div>
  );
}
