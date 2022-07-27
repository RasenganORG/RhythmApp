import axios from "axios";

const API_URL = "http://localhost:8080/api/user/";

// register
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  // save the user
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login
const login = async (userData) => {
  // de modificat
  const response = await axios.get(API_URL + userData.email);
  console.log(response);
  if (response.data && response.data.password === userData.password) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
  else{
    console.log("error")
  }
};

const authService = {
  register,
  login,
};

export default authService;
