import { Form, Input, Avatar, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { createSchool, addSchoolsAndTrainers } from "./schoolsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import "./addSchools.css";
import { useEffect } from "react";
import { getTrainers } from "../trainers/trainersSlice";

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

export default function AddSchool({ closeModal }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { schoolId, trainersId } = useSelector((state) => state.schools);
  const trainers = useSelector((state) => state.trainers.trainers);
  const dispatch = useDispatch();
  const { Option } = Select;

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  const onFinish = (values) => {
    const newSchool = {
      ...values,
      lowerCaseName: values.name.toLowerCase(),
      likes: "0",
    };
    dispatch(createSchool(newSchool));
    navigate("/schools");
    message.success("Your school has been successfully added!");
    form.resetFields();
    closeModal();
  };

  useEffect(() => {
    trainersId.forEach((trainers) =>
      trainers.forEach((trainer) =>
        dispatch(
          addSchoolsAndTrainers({ schoolId: schoolId, trainerId: trainer })
        )
      )
    );
  }, [schoolId]);

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
          name={"name"}
          label="School Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <FormItem
          name={"trainerId"}
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
              <Option key={trainer.id}>
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
            Add School
          </button>
        </div>
      </Form>
    </div>
  );
}
