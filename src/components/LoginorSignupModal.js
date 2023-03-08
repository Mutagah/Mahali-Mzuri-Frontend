import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
export default function LoginorSignupModal({ show, handleClose }) {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ marginTop: "120px" }}
        scrollable={true}
      >
        <Modal.Header style={{ backgroundColor: "#e0e0f0" }} closeButton>
          <Modal.Title>
            <h3 style={{ color: "#f17a12" }}>Please select an action</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="example"
          style={{ backgroundColor: "#e0e0f0", maxHeight: "400px" }}
        >
          <p>
            You have currently not logged in or signed up,select one of the
            below actions
          </p>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-between"
          style={{ backgroundColor: "#e0e0f0" }}
        >
          <Button
            onClick={() => navigate("/login")}
            style={{ backgroundColor: "#f17a12" }}
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            style={{ backgroundColor: "#f17a12" }}
          >
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
