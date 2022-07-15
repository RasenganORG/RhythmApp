import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";
import Courses from "./Courses";
import Trainers from "./Trainers";
import Schools from "./Schools";
import Rankings from "./Rankings";
import CalendarPage from "./CalendarPage";
import Congrats from "./Congrats";
import EventPage from "./EventPage";
import NewsPage from "./NewsPage";
import Statistics from "./Statistics";
import CreateEvent from "./CreateEvent";
import CreateNews from "./CreateNews";
import AddSchool from "./AddSchool";
import AddTrainer from "./AddTrainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/eventPage" element={<EventPage />} />
          <Route path="/newsPage" element={<NewsPage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/createNews" element={<CreateNews />} />
          <Route path="/addSchool" element={<AddSchool />} />
          <Route path="/addTrainer" element={<AddTrainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
