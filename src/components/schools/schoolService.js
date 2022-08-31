import axios from "axios";

const API_SCHOOLS_URL = "http://localhost:8080/api/schools/";
const API_SCHOOLSANDTRAINERS_URL = "http://localhost:8080/api";

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

const updateSchoolLikes = async (schoolId) => {
  const response = await axios.put(`${API_SCHOOLS_URL}${schoolId}`);
  return response.data;
};

const getSearchedSchool = async (schoolData) => {
  const response = await axios.get(`${API_SCHOOLS_URL}search/${schoolData}`);
  return response.data;
};

const editSchool = async (schoolData) => {
  const response = await axios.put(
    `${API_SCHOOLS_URL}edit/${schoolData.id}`,
    schoolData
  );
  return response.data;
};
const addSchoolsAndTrainers = async(schoolData) => {
  const response = await axios.post(`${API_SCHOOLSANDTRAINERS_URL}/schoolsAndTrainers`, schoolData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

const getBySchool = async (schoolId) => {
  const response = await axios.get(`${API_SCHOOLSANDTRAINERS_URL}/getBySchool/${schoolId}`);
  return response.data;
};

const schoolsService = {
  createSchool,
  getSchools,
  getSchoolById,
  updateSchoolLikes,
  getSearchedSchool,
  editSchool,
  addSchoolsAndTrainers,
  getBySchool,
};

export default schoolsService;
