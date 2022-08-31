import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSchoolById, editSchool } from "./schoolsSlice";
import { Select, Form, Input, Avatar, message } from "antd";
import FormItem from "antd/lib/form/FormItem";

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

export default function EditSchool({ closeModal }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const schoolId = params.schoolId;
  const { currentSchool } = useSelector((state) => state.schools);
  const trainers = useSelector((state) => state.trainers.trainers);
  const { Option } = Select;

  useEffect(() => {
    dispatch(getSchoolById(schoolId));
  }, []);

  const onFinish = (values) => {
    const newSchool = {
      ...values,
      lowerCaseName: values.name.toLowerCase(),
      likes: "0",
      id: schoolId,
    };
    dispatch(editSchool(newSchool));
    navigate(`/schools/${schoolId}`);
    message.success("Your school has been successfully updated!");
    form.resetFields();
    closeModal();
  };

  return (
    <div>
      {Object.keys(currentSchool).length !== 0 && (
        <Form
          initialValues={{
            name: currentSchool.name,
            lowerCaseName: currentSchool.lowerCaseName,
            description: currentSchool.description,
            likes: currentSchool.likes,
            trainers: currentSchool.trainers,
            danceStyles: currentSchool.danceStyles,
            imageURL: currentSchool.imageURL,
          }}
          form={form}
          style={{ width: "60%" }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label="currentSchool Name"
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
            <button
              className="addSchoolsButton"
              type="primary"
              htmlType="submit"
            >
              Update {currentSchool.name}
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
