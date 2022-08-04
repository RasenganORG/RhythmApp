import { configureStore } from "@reduxjs/toolkit";
import schoolsReducer from "./components/schools/schoolsSlice";
import addSchoolReducer from "./components/schools/schoolsSlice";
import authReducer from "./components/auth/authSlice";
import trainersReducer from "./components/trainers/trainersSlice"

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
    addSchool: addSchoolReducer,
    auth: authReducer,
    trainers: trainersReducer
  },
});

export default store;
