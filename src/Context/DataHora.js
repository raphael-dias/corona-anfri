import React, { createContext, useState, useContext } from "react";

const DataHoraContext = createContext();

export default function DataHoraProvider({ children }) {
  const [data, setData] = useState("");
  return (
    <DataHoraContext.Provider value={{ data, setData }}>
      {children}
    </DataHoraContext.Provider>
  );
}
export function useData() {
  const context = useContext(DataHoraContext);
  if (!context)
    throw new Error("useData must be used within a DataHoraProvider");
  const { data, setData } = context;
  return { data, setData };
}
