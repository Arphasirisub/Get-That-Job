import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage/LoginPage";
import LandingPage from "./page/LandingPage/LadingPage";
import SignupPage from "./page/SignUpPage/SignUpPage";
import ProfessionalPage from "./page/professionalPage/ProfessionalPage";
import RecruiterPage from "./page/RecruiterPage/RecruiterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignupPage />} />
        <Route path="/professionalPage" element={<ProfessionalPage />} />
        <Route path="/RecruiterPage" element={<RecruiterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
