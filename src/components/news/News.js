import { List, Card, Modal, Button } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { getNews } from "./NewsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddNews from "./AddNews";
import "./News.css";
const { Meta } = Card;

export default function News() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="news">
      <h1 className="schoolsPageTitle hover-3">News</h1>
      <Button onClick={showModal}>Add News</Button>
      <Modal
        title="New School"
        visible={isModalVisible}
        footer={null}
        width={1000}
        onCancel={handleCancel}
      >
        <AddNews closeModal={() => setIsModalVisible(false)} />
      </Modal>
      <div className="backgroundNews">
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
          className="newsList"
          dataSource={news}
          renderItem={(news, index) => (
            <List.Item key={news}>
              <Card
                id="newsCard"
                style={{
                  width: 350,
                }}
                cover={
                  <img
                    style={{ height: "300px" }}
                    alt="news-img"
                    src={news.imageURL}
                  />
                }
                onClick={() => navigate(`/news/${news.id}`)}
              >
                <Meta
                  title={news.title}
                  description={
                    <div className="newsCardMeta">
                      <div className="newsCardMetaDescription">
                        <p>{news.author}</p>
                        <p>{news.date}</p>
                      </div>
                      <div>
                        <LikeTwoTone
                          className="newsLikes"
                          twoToneColor="#0595f5"
                          size="large"
                        />
                        <p style={{ color: "#0595f5" }}>{news.likes}</p>
                      </div>
                    </div>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
