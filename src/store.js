import { configureStore } from "@reduxjs/toolkit";
import schoolsReducer from "./components/schools/schoolsSlice";
import addSchoolReducer from "./components/schools/schoolsSlice";
import authReducer from "./components/auth/authSlice";
import trainersReducer from "./components/trainers/trainersSlice";
import coursesReducer from "./components/courses/CoursesSlice";
import eventsReducer from "./components/events/EventsSlice";
import newsReducer from "./components/news/NewsSlice";

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
    events: eventsReducer,
    courses: coursesReducer,
    addSchool: addSchoolReducer,
    auth: authReducer,
    news: newsReducer,
    trainers: trainersReducer
  },
});

export default store;
