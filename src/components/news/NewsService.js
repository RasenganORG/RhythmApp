import axios from "axios";

const API_NEWS_URL = "http://localhost:8080/api/news/";

const createNews = async (newsData) => {
  const response = await axios.post(API_NEWS_URL, newsData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getNews = async () => {
  const response = await axios.get(API_NEWS_URL);
  return response.data;
};

const getNewsById = async (newsId) => {
  const response = await axios.get(`${API_NEWS_URL}${newsId}`);
  return response.data;
};

const updateNewsLikes = async (newsId) => {
  const response = await axios.put(`${API_NEWS_URL}${newsId}`);
  return response.data;
};

const editNews = async (newsData) => {
  const response = await axios.put(`${API_NEWS_URL}edit/${newsData.id}`, newsData);
  return response.data;
};


const eventsService = { createNews, getNews, getNewsById, updateNewsLikes, editNews };
export default eventsService;
