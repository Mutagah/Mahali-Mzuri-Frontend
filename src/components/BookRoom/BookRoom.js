import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button, Form, Modal } from "react-bootstrap";
export default function BookRoom({
  show,
  handleClose,
  roomType,
  unbookedRooms,
}) {
  const [mobileNumber, setPhoneNumber] = useState("");
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ marginTop: "100px" }}
        scrollable={true}
      >
        <Modal.Header style={{ backgroundColor: "#e0e0f0" }} closeButton>
          <Modal.Title>
            <h4 style={{ color: "#f17a12" }}>{roomType} room booking</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="example"
          style={{ backgroundColor: "#e0e0f0", maxHeight: "400px" }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "18px", fontWeight: 2000 }}>
                Select your room(s)
              </Form.Label>
              <Form.Select
                className="example"
                multiple
                style={{
                  backgroundColor: "#e0e0f0",
                  border: "2px solid black",
                  maxHeight: "100px",
                }}
              >
                {unbookedRooms?.map((room, index) => (
                  <option
                    key={index}
                    className="rounded-5 my-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 300,
                      border: "1px dotted #f17a12",
                    }}
                    value={room.room_number}
                  >
                    {room.room_number}
                  </option>
                ))}
              </Form.Select>
              <Form.Text className="text-muted d-flex justify-content-center">
                Hold control to select more than one room.
              </Form.Text>
            </Form.Group>

            <div className="container">
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-center">
                      Number of Adults
                    </Form.Label>
                    <Form.Control type="number" style={{ maxWidth: "150px" }} />
                  </Form.Group>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-center">
                      Number of Kids
                    </Form.Label>
                    <Form.Control type="number" style={{ maxWidth: "150px" }} />
                  </Form.Group>
                </div>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Booking date</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="d-flex justify-content-end">
                Checkout date
              </Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Form.Group className="mb-3 d-block">
                <Form.Label className="d-flex justify-content-center">
                  Total Amount
                </Form.Label>
                <Form.Control
                  placeholder="Disabled input"
                  className="d-flex justify-content-center"
                  value={10}
                  style={{ maxWidth: "250px" }}
                  disabled
                />
              </Form.Group>
            </div>
            <Form.Group className="d-block mb-3">
              <Form.Label className="d-flex justify-content-center">
                Enter Mpesa number
              </Form.Label>
            </Form.Group>
            <div className="mb-5 d-flex justify-content-center">
              <PhoneInput
                international
                defaultCountry="KE"
                style={{ marginY: "20px", height: 20 }}
                value={mobileNumber}
                onChange={setPhoneNumber}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-between"
          style={{ backgroundColor: "#e0e0f0" }}
        >
          <Button type="submit" style={{ backgroundColor: "#f17a12" }}>
            Pay with Mpesa
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
