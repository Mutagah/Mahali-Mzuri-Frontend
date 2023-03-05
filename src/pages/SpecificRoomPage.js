import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function SpecificRoomPage() {
  const [roomTypeData, setRoomTypeData] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/room_types/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRoomTypeData(data);
      });
  }, [params]);
  console.log(roomTypeData);
  return (
    <main>
      <div className="container-fluid" style={{ backgroundColor: "#e0e0f0" }}>
        <div className="row">
          <div className="col m-3">
            <h2 style={{ color: "#f17a12", fontWeight: "bolder" }}>
              &nbsp;{roomTypeData.room_type} rooms
            </h2>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Room description: &nbsp;
                    <i style={{ fontWeight: "normal" }}>
                      {roomTypeData.description}
                    </i>
                  </h5>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h5
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Bedroom capacity: &nbsp;
                      <i style={{ fontWeight: "normal" }}>
                        {roomTypeData.bedroom_capacity}
                      </i>
                    </h5>
                  </div>
                  <div className="col">
                    <h5
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Number of {roomTypeData.room_type} rooms: &nbsp;
                      <i style={{ fontWeight: "normal" }}>
                        {roomTypeData.number_of_rooms}
                      </i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-5 rounded-5">
          <div className="row mx-3 py-3">
            <div className="col-md-4">
              <div className="row">
                <div className="m-2">
                  <img
                    className="rounded-5 img-fluid"
                    src={roomTypeData.image1}
                    alt="View Hotel"
                  />
                </div>
                <div className="m-2">
                  <img
                    className="rounded-5 img-fluid"
                    src={roomTypeData.image2}
                    alt="View Hotel"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="m-2">
                  <img
                    className="rounded-5 img-fluid"
                    src={roomTypeData.image3}
                    alt="View Hotel"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="m-2">
                  <img
                    className="rounded-5 img-fluid"
                    src={roomTypeData.image4}
                    alt="View Hotel"
                  />
                </div>
                <div className="m-2">
                  <img
                    className="rounded-5 img-fluid"
                    src={roomTypeData.image5}
                    alt="View Hotel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
