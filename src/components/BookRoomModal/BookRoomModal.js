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
}) {
  const [mobileNumber, setPhoneNumber] = useState("");
  const [roomId, setRoomId] = useState([]);
  function handleRoomId(event) {
    // setRoomId([...roomId, event.target.value]);
    // roomId.push(event.target.value);
    console.log(event.target.value);
  }
  // console.log(roomId);
  // const [roomSelectOption, setRoomSelectOption] = useState({});
  // function handleRoomsSelect(event) {
  //   // if event.target.name === room_id
  //   setRoomSelectOption({
  //     ...roomSelectOption,
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // console.log(unbookedRooms);

  // Logic for handling rooms

  // 1. Take the room_ids and store them in an array
  // 2. According to the size of the above created array for each value in the array, create an object that will have all other details created in the roomBooking details together with this unique room_id
  // 3. Sending the details to the backend >>

  // a. The payment is done first via mpesa then later you create all relevant details in the UserRoomBooking details.

  // b. The logic >> Post the mpesa details and if and only if it is successful then you create the user room booking details. The amount and phone number go first >> The room details follow.

  //  NB: Amount will only total when you have selected all rooms

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
                onSelect={(event) => handleRoomId(event)}
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
