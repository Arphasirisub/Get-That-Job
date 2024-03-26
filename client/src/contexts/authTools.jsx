import React, { useContext, createContext,useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
function AuthProvider(props) {
  const [activeSteps, setActiveSteps] = useState("proLoginInfo");
  const [completeSteps, setCompleteSteps] = useState([
  {
    proLoginInfo: false,
    proPersonal: false,
    professionalInfo: false
  }
]);
  return (
    <AuthContext.Provider value={{ activeSteps, setActiveSteps, completeSteps,setCompleteSteps}}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthProvider, useAuth };
