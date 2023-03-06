import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import TapasRoundedIcon from "@mui/icons-material/TapasRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
export default function SpecificRoomPage() {
  const [roomTypeData, setRoomTypeData] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/room_types/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRoomTypeData(data);
      });
    // fetch("http://[::1]:3000/api/v1/specific_rooms", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({room_type_id: `${params.id}`}),
    // }).then((response)=> response.json()).then((data)=> console.log(data));
    //   }
  }, [params]);
  return (
    <main style={{ backgroundColor: "#e0e0f0" }}>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col m-3">
            <h1 style={{ color: "#f17a12", fontWeight: "bolder" }}>
              &nbsp;{roomTypeData.room_type} rooms
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    Room description: &nbsp;
                    <i style={{ fontWeight: "normal" }}>
                      {roomTypeData.description}
                    </i>
                  </h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                      }}
                    >
                      Bedroom capacity: &nbsp;
                      <i style={{ fontWeight: "normal" }}>
                        {roomTypeData.bedroom_capacity}
                      </i>
                    </h3>
                  </div>
                  <div className="col">
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                      }}
                    >
                      Number of {roomTypeData.room_type} rooms: &nbsp;
                      <i style={{ fontWeight: "normal" }}>
                        {roomTypeData.number_of_rooms}
                      </i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3 mx-5 p-2 rounded-5">
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
        <div className="container my-4">
          <div className="row">
            <div
              className="d-flex justify-content-around align-items-center py-1 rounded-5"
              style={{ border: "5px solid #f17a12" }}
            >
              <div className="d-block px-4">
                <div className="d-flex align-items-center justify-content-center mt-4">
                  {roomTypeData.parking === true ? (
                    <LocalParkingRoundedIcon style={{ fontSize: "30px" }} />
                  ) : (
                    <BlockRoundedIcon style={{ fontSize: "30px" }} />
                  )}
                </div>
                <div className="mt-3">
                  {roomTypeData.parking === true ? (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-3 py-1 rounded-5"
                    >
                      Free parking
                    </h5>
                  ) : (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-2 py-2 rounded-5"
                    >
                      No Free Parking
                    </h5>
                  )}
                </div>
              </div>

              <div className="d-block px-4">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ fontSize: "40px" }}
                >
                  📶
                </div>
                <div>
                  <h5
                    style={{ backgroundColor: "#f17a12", color: "#121212" }}
                    className="px-2 py-2 rounded-5"
                  >
                    Free wifi
                  </h5>
                </div>
              </div>

              <div className="d-block px-4">
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <TapasRoundedIcon style={{ fontSize: "30px" }} />
                </div>
                <div className="mt-3">
                  {roomTypeData.parking === true ? (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-2 py-2 rounded-5"
                    >
                      Free snacks
                    </h5>
                  ) : (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-2 py-2 rounded-5"
                    >
                      No free snacks
                    </h5>
                  )}
                </div>
              </div>

              <div className="d-block px-4">
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <RestaurantRoundedIcon style={{ fontSize: "30px" }} />
                </div>
                <div className="mt-3">
                  {roomTypeData.parking === true ? (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-2 py-2 rounded-5"
                    >
                      Special meal request
                    </h5>
                  ) : (
                    <h5
                      style={{ backgroundColor: "#f17a12", color: "#121212" }}
                      className="px-2 py-2 rounded-5"
                    >
                      No Special meal request
                    </h5>
                  )}
                </div>
              </div>

              <div className="d-block px-4">
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <AttachMoneyRoundedIcon style={{ fontSize: "30px" }} />
                </div>
                <div className="mt-3">
                  <h5
                    style={{ backgroundColor: "#f17a12", color: "#121212" }}
                    className="px-2 py-2 rounded-5"
                  >
                    {roomTypeData.price} USD
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
