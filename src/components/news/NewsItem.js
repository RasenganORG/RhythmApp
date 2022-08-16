import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "./NewsSlice";
import {
  InstagramFilled,
  LikeFilled,
  LinkOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./NewsItem.css";

export default function NewsItem() {
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
            <LikeFilled />
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
          <h1 className="headerContentTitle">{currentNews?.title}</h1>
          <p>
            By <b>{currentNews.author}</b>
          </p>
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
