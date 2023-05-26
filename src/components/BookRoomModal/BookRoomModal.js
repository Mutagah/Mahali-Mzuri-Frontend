import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Button, Form, Modal } from "react-bootstrap";
export default function BookRoom({
  handleClose,
  roomType,
  show,
  unbookedRooms,
  userId,
  roomTypeData,
}) {
  const [mobileNumber, setPhoneNumber] = useState("");
  const [userRoomBookingDetails, setUserRoomBookingDetails] = useState({});
  //  Write an async function that will send payment to mpesa and if the payment is successful then the user room booking details should be updated to the backend.
  async function mpesaPayment() {
    const paymentSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: mobileNumber.substring(1),
        amount: `1`}
      ),
    };
   const mpesaResponse = await fetch(
     "https://c895-197-232-61-242.ngrok-free.app/stkpush",
     paymentSettings
   );
   const data = await mpesaResponse.json();
   console.log(data.CustomerMessage)
   
  }

  function handleUserRoomBookingDetails(event) {
    if (
      event.target.name === "room_id" ||
      event.target.name === "number_of_adults" ||
      event.target.name === "number_of_kids"
    ) {
      setUserRoomBookingDetails({
        ...userRoomBookingDetails,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      setUserRoomBookingDetails({
        ...userRoomBookingDetails,
        [event.target.name]: event.target.value,
      });
    }
  }
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
                name="room_id"
                className="example"
                style={{
                  backgroundColor: "#e0e0f0",
                  border: "2px solid black",
                  maxHeight: "100px",
                }}
                onClick={(event) => handleUserRoomBookingDetails(event)}
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
                      backgroundColor: "orange",
                    }}
                    value={room.id}
                  >
                    {room.room_number}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="container">
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-center">
                      Number of Adults
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="number_of_adults"
                      style={{ maxWidth: "150px" }}
                      onChange={(event) => handleUserRoomBookingDetails(event)}
                    />
                  </Form.Group>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-center">
                      Number of Kids
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="number_of_kids"
                      style={{ maxWidth: "150px" }}
                      onChange={(event) => handleUserRoomBookingDetails(event)}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Booking date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="booking_date"
                onChange={(event) => handleUserRoomBookingDetails(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="d-flex justify-content-end">
                Checkout date
              </Form.Label>
              <Form.Control
                type="datetime-local"
                name="check_out_date"
                onChange={(event) => handleUserRoomBookingDetails(event)}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Form.Group className="mb-3 d-block">
                <Form.Label className="d-flex justify-content-center">
                  Total Amount
                </Form.Label>
                <Form.Control
                  placeholder="Disabled input"
                  className="d-flex justify-content-center"
                  value={roomTypeData.price * 150}
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
                name="phoneNumber"
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
          <Button onClick={() => mpesaPayment()} style={{ backgroundColor: "#f17a12" }}>
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
