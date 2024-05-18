import React, { useContext, createContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
function AuthProvider(props) {
  const [activeSteps, setActiveSteps] = useState("proLoginInfo");
  const [completeSteps, setCompleteSteps] = useState([
    {
      proLoginInfo: false,
      proPersonal: false,
      professionalInfo: false,
    },
  ]);

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  //login
  const login = async () => {
    const result = await axios.post("http://localhost:3000/auth/login", data);
    console.log(result);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/");
  };

  //register
  const register = async (data) => {
    try {
      console.log(data);
      await axios.post(
        "http://localhost:3000/auth/professional/register",
        data
      );
      console.log("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const [proEmail, setProEmail] = useState("");
  const [proPassword, setProPassword] = useState("");
  const [proName, setProName] = useState("");
  const [proPhone, setProPhone] = useState("");
  const [proBirthday, setProBirthday] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [proTitle, setProTitle] = useState("");
  const [proExperience, setProExperience] = useState("");
  const [proEducation, setProEducation] = useState("");

  const [input, setInput] = useState([
    {
      proEmail: "",
      proPassword: "",
      proName: "",
      proPhone: "",
      proBirthday: "",
      linkedIn: "",
      proTitle: "",
      proExperience: "",
      proEducation: "",
    },
  ]);

  const proHandleSubmit = async () => {
    const data = {
      email: input[0].proEmail,
      password: input[0].proPassword,
      name: input[0].proName,
      phone: input[0].proPhone,
      birthday: input[0].proBirthday,
      linkedinUrl: input[0].linkedIn,
      Title: input[0].proTitle,
      experience: input[0].proExperience,
      education: input[0].proEducation,
    };

    console.log("Submitting form data:", data);
    register(data);
  };

  return (
    <AuthContext.Provider
      value={{
        activeSteps,
        setActiveSteps,
        completeSteps,
        setCompleteSteps,
        register,
        login,
        proHandleSubmit,
        proEmail,
        setProEmail,
        proPassword,
        setProPassword,
        proName,
        setProName,
        proPhone,
        setProPhone,
        proBirthday,
        setProBirthday,
        linkedIn,
        setLinkedIn,
        proTitle,
        setProTitle,
        proExperience,
        setProExperience,
        proEducation,
        setProEducation,
        logout,
        input,
        setInput,
        state,
        setState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthProvider, useAuth };
