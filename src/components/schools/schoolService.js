import axios from "axios";

const API_SCHOOLS_URL = "http://localhost:8080/api/schools/";

const createSchool = async (schoolData) => {
  const response = await axios.post(API_SCHOOLS_URL, schoolData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const getSchools = async () => {
  const response = await axios.get(API_SCHOOLS_URL);
  return response.data;
};

const getSchoolById = async (schoolId) => {
  const response = await axios.get(`${API_SCHOOLS_URL}${schoolId}`);
  return response.data;
};

const updateSchool = async (schoolId) => {
  const response = await axios.put(`${API_SCHOOLS_URL}${schoolId}`);
  return response.data;
};

const schoolsService = {
  createSchool,
  getSchools,
  getSchoolById,
  updateSchool,
};

export default schoolsService;
