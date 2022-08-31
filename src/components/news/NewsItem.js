import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "./NewsSlice";
import { updateNewsLikes } from "./NewsSlice";
import { EditOutlined } from "@ant-design/icons";
import {
  InstagramFilled,
  LikeFilled,
  LinkOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./NewsItem.css";
import EditNews from "./EditNews";

export default function NewsItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();
  const params = useParams();
  const newsId = params.newsId;
  const currentNews = useSelector((state) => state.news.currentNews);

  useEffect(() => {
    dispatch(getNewsById(newsId));
  }, []);

  return (
    <div>
      <div className="headerNews">
        <div className="headerIconsNews">
          <div className="insta icon">
            <InstagramFilled />
          </div>
          <div className="like icon">
            <LikeFilled onClick={() => dispatch(updateNewsLikes(newsId))} />
          </div>
          <div className="link icon">
            <LinkOutlined />
          </div>
          <div className="twitter icon">
            <TwitterOutlined />{" "}
          </div>
        </div>
        <div className="headerContent">
          <p>{currentNews.date}</p>
          <EditOutlined
            className="editButton"
            style={{ fontSize: "17px" }}
            onClick={showModal}
          />
          <Modal
            title="New School"
            visible={isModalVisible}
            footer={null}
            width={1000}
            onCancel={handleCancel}
          >
            <EditNews closeModal={() => setIsModalVisible(false)} />
          </Modal>
          <h1 className="headerContentTitle">{currentNews?.title}</h1>
          <p>
            By <b>{currentNews.author}</b>
          </p>
          {currentNews.likes > 0 ? (
            <p>Liked by {currentNews.likes} people</p>
          ) : null}
        </div>
      </div>
      <div className="newsImg">
        <img
          className="headerNewsImg"
          src={currentNews?.imageURL}
          alt="news-img"
        />
      </div>
      <div className="newsDescriptionContainer">
        <p className="newsDescription">{currentNews.description}</p>
      </div>
    </div>
  );
}
