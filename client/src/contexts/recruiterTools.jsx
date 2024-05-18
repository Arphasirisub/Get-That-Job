import React, { useContext, createContext, useState } from "react";

const RecruiterContext = createContext();
const useRecruiter = () => useContext(RecruiterContext);
function RecruiterProvider(props) {
  const [recruiterActiveTap, setRecruiterActiveTap] = useState("jobPosting");

  return (
    <RecruiterContext.Provider
      value={{ recruiterActiveTap, setRecruiterActiveTap }}
    >
      {props.children}
    </RecruiterContext.Provider>
  );
}

export { RecruiterProvider, useRecruiter };
