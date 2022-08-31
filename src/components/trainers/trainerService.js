import axios from "axios";

const API_TRAINERS_URL = "http://localhost:8080/api/trainers/";
const API_COURSESANDTRAINERS_URL = "http://localhost:8080/api";

const createTrainer = async (trainerData) => {
  const response = await axios.post(API_TRAINERS_URL, trainerData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getTrainers = async () => {
  const response = await axios.get(API_TRAINERS_URL);
  return response.data;
};

const getTrainerById = async (trainerId) => {
  const response = await axios.get(`${API_TRAINERS_URL}${trainerId}`);
  return response.data;
};

const updateTrainerLikes = async (trainerId) => {
  const response = await axios.put(`${API_TRAINERS_URL}${trainerId}`);
  return response.data;
};

const editTrainer = async (trainerData) => {
  const response = await axios.put(
    `${API_TRAINERS_URL}edit/${trainerData.id}`,
    trainerData
  );
  return response.data;
};

const getByTrainerId = async (trainerId) => {
  const response = await axios.get(`${API_COURSESANDTRAINERS_URL}/getByTrainerId/${trainerId}`);
  return response.data;
};

const getByTrainer = async (trainerId) => {
  const response = await axios.get(`${API_COURSESANDTRAINERS_URL}/getByTrainer/${trainerId}`);
  return response.data;
};
const trainerService = {
  createTrainer,
  getTrainers,
  getTrainerById,
  updateTrainerLikes,
  getByTrainerId,
  getByTrainer,
  editTrainer,
};

export default trainerService;
