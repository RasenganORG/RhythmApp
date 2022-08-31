import { List, Card, Tag, Modal, Button } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { getTrainers } from "./trainersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddTrainer from "./AddTrainers";
import "./Trainer.css";
const { Meta } = Card;

export default function Trainers() {
  const navigate = useNavigate();
  const { trainers } = useSelector((state) => state.trainers);
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
    dispatch(getTrainers());
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="title">
        <h1 className="schoolsPageTitle hover-3">Trainers</h1>
      </div>
      <div id="trainerPage">
        <Button onClick={showModal}>Add Trainer</Button>
        <Modal
          title="New Trainer"
          visible={isModalVisible}
          footer={null}
          width={1000}
          onCancel={handleCancel}
        >
          <AddTrainer closeModal={() => setIsModalVisible(false)} />
        </Modal>

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
          dataSource={trainers}
          renderItem={(trainer, index) => (
            <List.Item key={trainer}>
              <Card
                className="trainerCard"
                style={{ cursor: "pointer" }}
                cover={
                  <img
                    alt="example"
                    onClick={() => {
                      navigate(`/trainers/${trainer.id}`);
                    }}
                    style={{ cursor: "pointer" }}
                    src={trainer.imageURL}
                  />
                }
                actions={[
                  <p className="schoolCardFooter">
                    Courses: {trainer.numberOfCourses}
                  </p>,
                  <p className="schoolCardFooter">Schools:{}</p>,
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LikeTwoTone twoToneColor="#0595f5" size="large" />
                    <p style={{ color: "#0595f5" }}>{trainer.likes}</p>
                  </div>,
                ]}
              >
                <Meta
                  title={`${trainer.firstName} ${trainer.lastName}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/trainers/${trainer.id}`);
                  }}
                  description={trainer.danceStyles?.map((danceStyle) => (
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
    </div>
  );
}
