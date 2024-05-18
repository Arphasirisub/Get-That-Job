import React, { useContext, createContext, useState } from "react";

const ProContext = createContext();
const usePro = () => useContext(ProContext);
function ProProvider(props) {
  const [proActiveTap, setProActiveTap] = useState("findThatJob");

  return (
    <ProContext.Provider value={{ proActiveTap, setProActiveTap }}>
      {props.children}
    </ProContext.Provider>
  );
}

export { ProProvider, usePro };
