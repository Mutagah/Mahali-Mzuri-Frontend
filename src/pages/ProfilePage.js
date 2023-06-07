import React, { useEffect, useState } from "react";
import { Button,Col, Container, Row, Table } from "react-bootstrap";
export default function ProfilePage() {
    const [userData, setUserData] = useState({})
    const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    fetch("http://[::1]:3000/api/v1/user_profiles/1",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => response.json()).then(data => setUserData(data));
  }, [token]);
  console.log(Object.keys(userData))
  console.log(Object.entries(userData));
  return (
    <Container fluid>
      <Container
        fluid
        className="m-2 px-5"
      >
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
          <Col xs={12} md={6}>
            This is where the avatar image will go
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
    </Container>

    //   <main style={{backgroundColor:"white"}}>This is the profile Page</main>
  );
}
