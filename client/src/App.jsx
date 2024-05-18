import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage/LoginPage";
import LandingPage from "./page/LandingPage/LadingPage";
import SignupPage from "./page/SignUpPage/SignUpPage";
// import SideBar from "./page/professionalPage/SideBar";
import ProfessionalPage from "./page/professionalPage/ProfessionalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignupPage />} />
        <Route path="/professionalPage" element={<ProfessionalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
