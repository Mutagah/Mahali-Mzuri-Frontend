import "./ProfilePage.css";
import { BsPersonFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [userBookedRooms, seetUserBookedRooms] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    fetch("http://[::1]:3000/api/v1/user_profiles/1", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));
    fetch("http://[::1]:3000/api/v1/user_room_bookings/1", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => seetUserBookedRooms(data));
  }, [token]);
  const previouslyBookedRooms = userBookedRooms.filter((roomBooking) =>
    parseInt(
        (new Date(roomBooking.check_out_date).getTime()- new Date().getTime()) /
        (1000 * 60 * 60 * 24)
        ) < 0)
    const recentlyBookedRooms = userBookedRooms.filter(
           (roomBooking) =>
             parseInt(
               (new Date(roomBooking.booking_date).getTime() -
                 new Date().getTime()) /
                 (1000 * 60 * 60 * 24)
             ) > 0
         );
  const displayPreviouslyBookedRooms = previouslyBookedRooms.map((room) => (
    <Card className="m-2" style={{ border: "2px solid grey" }}>
      <Card.Title className="m-1" style={{ color: "red" }}>
        {room.room.room_number}
      </Card.Title>
      <Card.Body>
        <h4>
          Number of kids: {room.number_of_kids} &nbsp; &nbsp; &nbsp; Number of
          Adults: {room.number_of_adults}
        </h4>
      </Card.Body>
      <Card.Title className="d-flex justify-content-end m-1">
        <h5 style={{ color: "#f17a12" }}>Checked out Date</h5> &nbsp;: &nbsp;
        {room.check_out_date.slice(0, 10)}
      </Card.Title>
    </Card>
  ));
  const displayRecentlyBookedRooms =
    recentlyBookedRooms.length === 0 ? (
      <Card className="m-2" style={{ border: "2px dotted red" }}>
        <h1
          className="d-flex justify-content-center p-2 m-5"
          style={{ color: "#f17a12" }}
        >
          No rooms booked recently
        </h1>
      </Card>
    ) : (
      recentlyBookedRooms.map((room) => (
        <Card className="m-2" style={{ border: "2px solid grey" }}>
          <Card.Title className="m-1" style={{ color: "red" }}>
            {room.room.room_number}
          </Card.Title>
          <Card.Body>
            <h4>
              Number of kids: {room.number_of_kids} &nbsp; &nbsp; &nbsp; Number
              of Adults: {room.number_of_adults}
            </h4>
          </Card.Body>
          <Card.Title className="d-flex justify-content-end m-1">
            <h5 style={{ color: "#f17a12" }}>Booked Date</h5> &nbsp;:
            &nbsp;
            {room.check_out_date.slice(0, 10)}
          </Card.Title>
        </Card>
      ))
    );
  return (
    <Container fluid className="m-2">
      <Container fluid className="m-2 px-5">
        <Row>
          <Col className="d-flex justify-content-end">
            <Button
              style={{ backgroundColor: "red" }}
              className="my-2 d-flex justify-content-end"
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center d-flex">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <BsPersonFill size={400} style={{ color: "#f17a12" }} />
          </Col>
          <Col xs={12} md={6} className="p-5">
            <Table striped bordered hover style={{ border: "3px solid black" }}>
              <thead colSpan={2} className="justify-content-center d-flex">
                <th colSpan={2}>
                  <h3>User Profile</h3>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Full name:</td>
                  <td style={{ color: "#f17a12" }}>
                    {userData.full_name === null ? "n/a" : userData.full_name}
                  </td>
                </tr>
                <tr>
                  <td>Username:</td>
                  <td style={{ color: "#f17a12" }}>
                    {userData.username === null ? "n/a" : userData.username}
                  </td>
                </tr>
                <tr>
                  <td>Email Address:</td>
                  <td style={{ color: "#f17a12" }}>{userData.email_address}</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td style={{ color: "#f17a12" }}>
                    {userData.age === null ? "n/a" : userData.age}
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td style={{ color: "#f17a12" }}>
                    {userData.gender === null ? "n/a" : userData.gender}
                  </td>
                </tr>
                <tr>
                  <td>Role:</td>
                  <td style={{ color: "#f17a12" }}>
                    {userData.role === null ? "n/a" : userData.role}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <hr style={{ border: "3px solid black" }}></hr>
          <Col xs={12} md={6}>
            <h3
              className="d-flex justify-content-center"
              style={{ color: "#f17a12" }}
            >
              Recently booked Rooms
            </h3>
            <Card
              className="example d-flex p-2 m-2"
              style={{
                border: "3px solid black",
                maxHeight: "350px",
                cursor: "pointer",
                overflowY: "scroll",
                borderRadius: "10px",
              }}
            >
              {displayRecentlyBookedRooms}
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <h3
              className="d-flex justify-content-center"
              style={{ color: "#f17a12" }}
            >
              Previously Booked Rooms
            </h3>
            <Card
              className="example p-2 m-2 d-flex"
              style={{
                border: "3px solid black",
                maxHeight: "350px",
                cursor: "pointer",
                overflowY: "scroll",
                borderRadius: "10px",
              }}
            >
              {displayPreviouslyBookedRooms}
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
