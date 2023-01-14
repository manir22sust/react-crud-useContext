import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useEmployee } from "../hooks/useEmployee";

export const EditEmployee = ({ employee }) => {
  const { editEmployee } = useEmployee();

  const id = employee.id;

  const [newEmployee, setNewEmployee] = useState({
    name: employee.name,
    email: employee.email,
    address: employee.address,
    phone: employee.phone,
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const { name, email, phone, address } = newEmployee;

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEmployee(id, updatedEmployee);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter address"
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Button variant="primary mt-3" type="submit">
          Edit Employee
        </Button>
      </Form>
    </div>
  );
};
