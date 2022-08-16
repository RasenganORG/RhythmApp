import axios from "axios";

const API_COURSES_URL = "http://localhost:8080/api/courses/";

const createCourse = async (courseData) => {
  const response = await axios.post(API_COURSES_URL, courseData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getCourses = async () => {
  const response = await axios.get(API_COURSES_URL);
  return response.data;
};

const getCourseById = async (courseId) => {
  const response = await axios.get(`${API_COURSES_URL}${courseId}`);
  return response.data;
};

const coursesService = { createCourse, getCourses, getCourseById };
export default coursesService;
