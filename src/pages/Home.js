import React from "react";
import { EmployeeList } from "../components/EmployeeList";

export const Home = () => {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeList />
          </div>
        </div>
      </div>
    </>
  );
};
