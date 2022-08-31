import { Form, Input, message } from "antd";
import { useEffect } from "react";
import { editNews, getNewsById } from "./NewsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
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

export default function EditNews({ closeModal }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const newsId = params.newsId;
  const { currentNews } = useSelector((state) => state.news);
  const { Option } = Select;

  useEffect(() => {
    dispatch(getNewsById(newsId));
  }, []);

  const onFinish = (values) => {
    const newNews = {
      ...values,
      likes: "0",
      date: moment().format("MMM Do YY"),
      id: newsId,
    };
    dispatch(editNews(newNews));
    navigate("/news");
    message.success("Your news has been successfully updated!");
    form.resetFields();
    closeModal();
  };

  return (
    <div>
      {Object.keys(currentNews).length !== 0 && (
        <Form
          initialValues={{
            title: currentNews.title,
            description: currentNews.description,
            author: currentNews.author,
            date: moment(currentNews.date),
            likes: currentNews.likes,
            imageURL: currentNews.imageURL,
          }}
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
            <button
              className="addSchoolsButton"
              type="primary"
              htmlType="submit"
            >
              Update News
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
