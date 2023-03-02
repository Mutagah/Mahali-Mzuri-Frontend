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
      <div style={{ backgroundColor: "#e0e0f0" }}>
        <div className="row text-center py-3">
          <h1 style={{ fontWeight: "1200",textDecoration:"underline" }}>Our Rooms</h1>
        </div>
        <div className="row text-center">
          <h1 style={{ fontWeight: "300", fontSize: "bold" }}>
            A &nbsp;
            <i style={{ color: "#f17a12", textDecoration: "none" }}>
              World
            </i>
            &nbsp; Of &nbsp;
            <i style={{ color: "#f17a12", textDecoration: "none" }}>
              Choice
            </i>
          </h1>
        </div>
        {/* <div className="row text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            quibusdam, assumenda, tenetur.
          </p>
          <p className="my-n8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div> */}
        <div className="row mx-3 py-3">
          <div className="col-md-4 d-block justify-content-center">
            {roomTypes
              .filter((element, index) => index === 0 || index === 1)
              .map((roomType) => {
                return (
                  <>
                    <div className="row text-center">
                      <img
                        className="rounded-5 img-fluid"
                        src={roomType.image1}
                        alt="View Hotel"
                      />
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div
                        className="col-10 rounded-5 d-flex justify-content-center my-4 align-items-center py-2"
                        style={{
                          border: "2px solid #121212",
                          backgroundColor: "#f17a12",
                        }}
                      >
                        <h4>{roomType.room_type}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div
            className="col-md-4 d-flex flex-column p-2 rounded-5"
            style={{ backgroundColor: "#f17a12" }}
          >
            {roomTypes
              .filter((element, index) => index === 2)
              .map((roomType) => {
                return (
                  <>
                    <div className="row p-3">
                      <img
                        className="img-fluid rounded-5"
                        src={roomType.image1}
                        alt="View Hotel"
                      />
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div
                        className="col-10 rounded-5 d-flex justify-content-center my-4 align-items-center py-2"
                        style={{
                          border: "2px solid #121212",
                          backgroundColor: "black",
                        }}
                      >
                        <h4 style={{ color: "#f17a12" }}>
                          {roomType.room_type}
                        </h4>
                      </div>
                    </div>
                    <div className="row p-3">
                      <img
                        className="img-fluid rounded-5"
                        src={roomType.image2}
                        alt="View Hotel"
                      />
                    </div>
                  </>
                );
              })}
          </div>
          <div className="col-md-4 d-block justify-content-center">
            {roomTypes
              .filter((element, index) => index === 3 || index === 4)
              .map((roomType) => {
                return (
                  <>
                    <div className="row">
                      <img
                        className="img-fluid rounded-5 "
                        src={roomType.image1}
                        alt="View Hotel"
                      />
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div
                        className="col-10 rounded-5 d-flex justify-content-center my-4 align-items-center py-2"
                        style={{
                          border: "2px solid #121212",
                          backgroundColor: "#f17a12",
                        }}
                      >
                        <h4>{roomType.room_type}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
