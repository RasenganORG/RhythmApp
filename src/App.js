import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import News from "./components/news/News";
import Schools from "./components/schools/Schools";
import NotFound from "./components/NotFound";
import NewsItem from "./components/news/NewsItem";
import SchoolsItem from "./components/schools/SchoolsItem";
import LayoutPage from "./components/layout/LayoutPage";
import LogIn from "./components/auth/LogIn";
import Statistics from "./components/statistics/Statistics";
import  RequiredAuth  from "./components/auth/RequiredAuth";
import AddSchools from "./components/schools/addSchools";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<News />} />
              <Route path="news" element={<News />} />
              <Route path="news/:newsId" element={<NewsItem />} />
              <Route path="schools" element={<Schools />} />
              <Route path="schools/:schoolsId" element={<SchoolsItem />} />
              <Route
                path="statistics"
                element={
                  <RequiredAuth>
                    <Statistics />
                  </RequiredAuth>
                }
              />
              <Route path="addSchools" element={<AddSchools />} />
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
