import axios from "axios";

const API_EVENTS_URL = "http://localhost:8080/api/events/";

const createEvent = async (eventData) => {
  const response = await axios.post(API_EVENTS_URL, eventData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getEvents = async () => {
  const response = await axios.get(API_EVENTS_URL);
  return response.data;
};

const getEventById = async (eventId) => {
  const response = await axios.get(`${API_EVENTS_URL}${eventId}`);
  return response.data;
};

const updateEventLikes = async (eventId) => {
  const response = await axios.put(`${API_EVENTS_URL}${eventId}`);
  return response.data;
};

const editEvent = async (eventData) => {
  const response = await axios.put(
    `${API_EVENTS_URL}edit/${eventData.id}`,
    eventData
  );
  return response.data;
};

const eventsService = {
  createEvent,
  getEvents,
  getEventById,
  updateEventLikes,
  editEvent,
};
export default eventsService;
