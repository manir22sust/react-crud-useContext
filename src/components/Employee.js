import { useState, useEffect } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { EditEmployee } from "./EditEmployee";
import { useEmployee } from "../hooks/useEmployee";

export const Employee = ({ theEmployee }) => {
  const { deleteEmployee } = useEmployee();

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [theEmployee]);
  return (
    <>
      <tr key={theEmployee.id}>
        <td>{theEmployee.name}</td>
        <td>{theEmployee.email}</td>
        <td>{theEmployee.address}</td>
        <td>{theEmployee.phone}</td>
        <td>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                <strong>Edit</strong>
              </Tooltip>
            }
          >
            <button
              onClick={handleShow}
              className="btn text-warning btn-act"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE254;</i>
            </button>
          </OverlayTrigger>

          <OverlayTrigger
            key="top1"
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                <strong>Delete</strong>
              </Tooltip>
            }
          >
            <button
              onClick={() => deleteEmployee(theEmployee.id)}
              className="btn text-danger btn-act"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE872;</i>
            </button>
          </OverlayTrigger>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* edit  Form  */}
          <EditEmployee employee={theEmployee} />
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
