import axios from "axios";

const API_COURSES_URL = "http://localhost:8080/api/courses/";
const API_COURSESANDTRAINERS_URL = "http://localhost:8080/api";

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

const getSearchedCourse = async (courseData) => {
  const response = await axios.get(`${API_COURSES_URL}search/${courseData}`);

  return response.data;
};

const updateCourseLikes = async (courseId) => {
  const response = await axios.put(`${API_COURSES_URL}${courseId}`);
  return response.data;
};

const editCourse = async (courseData) => {
  const response = await axios.put(`${API_COURSES_URL}edit/${courseData.id}`, courseData);
  return response.data;
};

const addCoursesAndTrainers = async(courseData) => {
  const response = await axios.post(`${API_COURSESANDTRAINERS_URL}/coursesAndTrainers`, courseData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

// The course trainers info
const getByCourseId = async (courseId) => {
  const response = await axios.get(`${API_COURSESANDTRAINERS_URL}/getByCourseId/${courseId}`);
  return response.data;
};

const coursesService = {
  createCourse,
  getCourses,
  getCourseById,
  getSearchedCourse,
  updateCourseLikes,
  editCourse,
  addCoursesAndTrainers,
  getByCourseId,
};
export default coursesService;
