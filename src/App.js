import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/news/News";
import Schools from "./components/schools/Schools";
import NotFound from "./components/NotFound";
import NewsItem from "./components/news/NewsItem";
import SchoolsItem from "./components/schools/SchoolsItem";
import LayoutPage from "./components/layout/LayoutPage";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />} > 
            <Route path="news" element={<News />} />
            <Route path="news/:newsId" element={<NewsItem />} />
            <Route path="schools" element={<Schools />} />
            <Route path="schools/:schoolsId" element={<SchoolsItem />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
