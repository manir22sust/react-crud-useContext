import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const useEmployee = () => {
  const context = useContext(EmployeeContext);

  if (context === undefined) {
    throw new Error("useContext must be inside EmployeeContext");
  }
  return context;
};
