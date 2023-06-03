import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import AuthPage from "./LoginSignUp/AuthPage";
import FindPw from "./LoginSignUp/Login/FindPw";
import Calendar from "./Calendar/Calendar";
import Timetable from "./Timetable/Timetable";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/FindPw" element={<FindPw />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Timetable" element={<Timetable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
