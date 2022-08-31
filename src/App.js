import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/news/News";
import Schools from "./components/schools/Schools";
import NotFound from "./components/NotFound";
import NewsItem from "./components/news/NewsItem";
import SchoolsItem from "./components/schools/SchoolsItem";
import LayoutPage from "./components/layout/LayoutPage";
import LogIn from "./components/auth/LogIn";
import Statistics from "./components/statistics/Statistics";
import RequiredAuth from "./components/auth/RequiredAuth";
import AddSchools from "./components/schools/addSchools";
import Register from "./components/auth/Register";
import CourseItem from "./components/courses/CourseItem";
import EventItem from "./components/events/EventItem";
import SearchComponent from "./components/search/SearchComponent";
import EditSchool from "./components/schools/EditSchool";
import EditCourse from "./components/courses/EditCourse";
import EditNews from "./components/news/EditNews";
import EditEvent from "./components/events/EditEvent";
import Trainers from "./components/trainers/Trainers";
import TrainersItem from "./components/trainers/TrainersItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <>
                  <SearchComponent />
                  <News />
                </>
              }
            />
            <Route path="news" element={<News />} />
            <Route path="news/:newsId" element={<NewsItem />} />
            <Route path="news/:newsId/edit" element={<EditNews />} />
            <Route path="schools" element={<Schools />} />
            <Route path="schools/:schoolId" element={<SchoolsItem />} />
            <Route path="schools/:schoolId/edit" element={<EditSchool />} />
            <Route
              path="schools/:schoolId/:courseId"
              element={<CourseItem />}
            />
            <Route
              path="schools/:schoolId/:courseId/edit"
              element={<EditCourse />}
            />
            <Route path="events/:eventId" element={<EventItem />} />
            <Route path="events/:eventId/edit" element={<EditEvent />} />
            <Route
              path="statistics"
              element={
                <RequiredAuth>
                  <Statistics />
                </RequiredAuth>
              }
            />
            <Route path="trainers" element={<Trainers />} />
            <Route path="trainers/:trainerId" element={<TrainersItem />} />
            {/* <Route path="trainers/:trainerId/edit" element={<EditSchool />} /> */}
            <Route path="addSchools" element={<AddSchools />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
