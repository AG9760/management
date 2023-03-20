import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function studentLanding() {
  return (
    <Form className="container">
      <div className="adminheading">
        <span className="adminheading">
          <h1> Add Student Data </h1>
        </span>
      </div>
      <div className="row mt-4 ml-4">
        <Form.Group
          className="col mb-3 text-center"
          controlId="formBasicFirstName"
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First name" />
        </Form.Group>

        <Form.Group className="col mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </div>

      <div className="row mt-4 ml-4">
        <Form.Group className="col mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted" style={{ float: "left" }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="col mb-3" controlId="formBasicLastName">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" placeholder="Enter DOB" />
        </Form.Group>
      </div>

      <div className="row mt-4 ml-4">
        <Form.Group className="col mb-3" controlId="formBasicEmail">
          <Form.Label>Gender:</Form.Label>
          <div className="input-group col-sm-10">
            <label for="male">
              <input type="radio" name="gender" value="male" id="male" /> Male
            </label>
            <label for="female">
              <input type="radio" name="gender" value="female" id="female" />{" "}
              Female
            </label>
          </div>
        </Form.Group>

        <Form.Group className="col mb-3" controlId="formBasicLastName">
          <Form.Label>Address</Form.Label>
          <Form.Control type="textarea" placeholder="Enter Address" />
        </Form.Group>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default studentLanding;
