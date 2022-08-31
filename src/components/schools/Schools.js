import { List, Card, Tag, Modal, Button } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { getSchools } from "./schoolsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSchool from "./addSchools";
import SearchComponent from "../search/SearchComponent";
import "./Schools.css";
const { Meta } = Card;

export default function Schools() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { schools } = useSelector((state) => state.schools);
  useEffect(() => {
    dispatch(getSchools());
  }, []);

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
        <h1 className="schoolsPageTitle hover-3">Dance Schools</h1>
      </div>
      <SearchComponent />
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
            <List.Item key={school}>
              <Card
                className="schoolsCard"
                cover={
                  <img
                    style={{ height: "350px" }}
                    alt="example"
                    src={school.imageURL}
                  />
                }
                actions={[
                  <p className="schoolCardFooter">
                    Trainers: {school.trainersId?.length}
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
                    <LikeTwoTone twoToneColor="#0595f5" size="large" />
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
                  description={school.danceStyles?.map((danceStyle) => (
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
