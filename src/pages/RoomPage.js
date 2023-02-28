import axios from "axios";
import React, { useEffect, useState } from "react";
export default function RoomPage() {
  // fetching rooms data
  const baseUrl = "http://[::1]:3000/api/v1/room_types";
  const [roomTypes, setRoomTypes] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setRoomTypes(response.data);
    });
  }, []);
  return (
    <main>
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <div className="row text-center py-3">
          <h3>Our Rooms</h3>
        </div>
        <div className="row text-center">
          <h1 style={{ fontWeight: "700", fontSize: "bold" }}>
            A &nbsp;
            <span style={{ color: "#f17a12", textDecoration: "none" }}>
              World
            </span>
            &nbsp; Of &nbsp;
            <span style={{ color: "#f17a12", textDecoration: "none" }}>
              Choice
            </span>
          </h1>
        </div>
        <div className="row text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            quibusdam, assumenda, tenetur.
          </p>
          <p className="my-n8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className="row mx-3"
          style={{
            disply: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-4">
            {roomTypes.map((roomType, index) => {
              if (index === 0 || index === 1) {
                return (
                  <div
                    className="col-md-4 text-center"
                  >
                    <img
                      className="rounded-5"
                      src={roomType.image1}
                      alt="View Hotel"
                      style={{ maxHeight: "600px", maxWidth: "600px" }}
                    />
                    <h4>{roomType.room_type}</h4>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-4">
            {roomTypes.map((roomType, index) => {
              if (index === 2) {
                return (
                  <div className="col-md-4" style={{justifyContent:"center",display:"block"}}>
                    <img
                      className="rounded-5"
                      src={roomType.image4}
                      alt="View Hotel"
                      style={{ maxWidth: "600px", maxHeight: "500px" }}
                    />
                    <p>{roomType.room_type}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-4">
            {roomTypes.map((roomType, index) => {
              if (index === 3 || index === 4) {
                return (
                  <div
                    className="col-md-4"
                  >
                    <img
                      className="rounded-5"
                      src={roomType.image1}
                      alt="View Hotel"
                      style={{ maxHeight: "600px", maxWidth: "600px" }}
                    />
                    <p>{roomType.room_type}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
