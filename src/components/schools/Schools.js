import { List, Card, Tag, Modal, Button } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { schoolsActions,getSchools } from "./schoolsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSchool from "./addSchools";
import "./Schools.css";
const { Meta } = Card;

export default function Schools() {
  const navigate = useNavigate();
  const { schools, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.schools
  );
  const dispatch = useDispatch();
  const tagColors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  useEffect(() => {
    dispatch(getSchools());
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="schoolsPage">
      <Button onClick={showModal}>Add School</Button>
      <Modal
        title="New School"
        visible={isModalVisible}
        footer={null}
        width={1000}
        onCancel={handleCancel}
      >
        <AddSchool closeModal={() => setIsModalVisible(false)} />
      </Modal>
      <h1 className="schoolsPageTitle hover-3">Dance Schools</h1>

      <List
        grid={{
          gutter: 32,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={schools}
        renderItem={(school, index) => (
          <List.Item>
            <Card
              className="schoolsCard"
              cover={
                <img
                  style={{ height: "300px" }}
                  alt="example"
                  src={school.imageURL}
                />
              }
              actions={[
                <p className="schoolCardFooter">
                  Trainers: {school.trainers.length}
                </p>,
                <p className="schoolCardFooter">Courses:{}</p>,
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <LikeTwoTone
                    twoToneColor="#0595f5"
                    onClick={() => dispatch(schoolsActions.like(index))}
                    size="large"
                  />
                  <p style={{ color: "#0595f5" }}>{school.likes}</p>
                </div>,
              ]}
            >
              <Meta
                className="schoolCardMeta"
                title={school.name}
                onClick={() => {
                  navigate(`/schools/${school.id}`);
                }}
                description={school.danceStyles.map((danceStyle) => (
                  <Tag
                    color={
                      tagColors[Math.floor(Math.random() * tagColors.length)]
                    }
                  >
                    #{danceStyle}
                  </Tag>
                ))}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
