import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import AuthPage from "./LoginSignUp/AuthPage";
import FindPw from "./LoginSignUp/Login/FindPw";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/FindPw" element={<FindPw />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
