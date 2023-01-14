import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEmployee } from "../hooks/useEmployee";
import { Employee } from "./Employee";
import { AddForm } from "./AddForm";
import { Alert } from "react-bootstrap";
import { Pagination } from "./Pagination";

export const EmployeeList = () => {
  const { sortedEmployees } = useEmployee();

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);
  // Alert messeage
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  //for Pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant="success">
        <Alert.Heading> Emlployee List Updated Succefully!!</Alert.Heading>
      </Alert>
      <Table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th> Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => {
            return <Employee theEmployee={employee} key={employee.id} />;
          })}
        </tbody>
      </Table>
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentEmployees}
        sortedEmployees={sortedEmployees}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* add Form  */}
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
