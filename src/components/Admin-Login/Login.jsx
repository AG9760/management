import React, { useState } from "react";
import "./login.css";
import { GroupAdd, School } from "@mui/icons-material";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmission = () => {
    let datas = {
      name: "anshika",
      email: "abc@gmail.com",
      password: "12345",
    };
    // let data = JSON.stringify(datas);
    fetch("http://localhost:8080/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "anshika@gmail.com",
        password: "check",
        name: "anshika",
      }),
    }).then((response) => {
      console.log(response);
    });
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("success");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <div className="login">
      <div className="login-buttons" style={{ zIndex: "0" }}>
        <div className="loginheading">
          <span className="heading">Sign In As</span>
        </div>
        <div className="loginbuttons">
          <div className="LoginButton col-md-12 text-center">
            <Button
              variant="outline-primary"
              size="lg"
              className="loginbuttonadmin"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <GroupAdd className="loginIcon" sx={{ fontSize: "35px" }} />
              Admin
            </Button>{" "}
            <Button
              variant="outline-secondary"
              size="lg"
              className="loginbuttonstudent"
            >
              <School className="loginIcon" sx={{ fontSize: "35px" }} />
              Student
            </Button>{" "}
            <Button
              variant="outline-secondary"
              size="lg"
              className="loginbuttonstudent"
            >
              <School className="loginIcon" sx={{ fontSize: "35px" }} />
              Teacher
            </Button>
          </div>
        </div>
      </div>

      <Modal
        className="shadow bd-example-modal-sm modellogin"
        id="example-modal-sizes-title-sm"
        tabindex="-1"
        role="dialog"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ zIndex: "1" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 className="modal-title model-heading col-md-12">
                Login as a Admin
              </h5>
            </div>
            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted emailtext">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4 mt-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link to="/StudentLanding">
                  <Button variant="primary" onClick={handleSubmission}>
                    Sign up
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
