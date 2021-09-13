import React, { useState } from "react";

const Context = React.createContext({});

export function DataTypeProvider({ children }) {
  const [currentDataType, setCurrentDataType] = useState("Daily");
  return (
    <Context.Provider value={{ currentDataType, setCurrentDataType }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
