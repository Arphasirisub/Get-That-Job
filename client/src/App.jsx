import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage/LoginPage";
import LandingPage from "./page/LandingPage/LadingPage";
import SignupPage from "./page/SignUpPage/SignUpPage";
import ProLoginInfo from "./page/SignUpPage/professional/loginInfo";
import ProPersonal from "./page/SignUpPage/professional/personalInfo";
import ProfessionalInfo from "./page/SignUpPage/professional/professionalInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
