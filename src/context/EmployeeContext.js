import { createContext, useState, useEffect } from "react";
import { EmployeeData } from "../data/EmployeeData";
import { v4 as uuidv4 } from "uuid";
// create context
export const EmployeeContext = createContext();

//  context provider
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(EmployeeData);

  // actions
  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));
  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  const editEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, editEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
