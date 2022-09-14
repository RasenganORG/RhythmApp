import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store"
import { configureStore } from "@reduxjs/toolkit";
import schoolsReducer from "../components/schools/schoolsSlice"
import addSchoolReducer from "../components/schools/schoolsSlice";
import authReducer from "../components/auth/authSlice";
import trainersReducer from "../components/trainers/trainersSlice";
import coursesReducer from "../components/courses/CoursesSlice";
import eventsReducer from "../components/events/EventsSlice";
import newsReducer from "../components/news/NewsSlice";

export function renderWithRedux(renderComponent) {
    const store = configureStore({
      reducer: {
        schools: schoolsReducer,
        events: eventsReducer,
        courses: coursesReducer,
        addSchool: addSchoolReducer,
        auth: authReducer,
        news: newsReducer,
        trainers: trainersReducer,
      },
    });
    return render(<Provider store={store}>{renderComponent}</Provider>);
  }