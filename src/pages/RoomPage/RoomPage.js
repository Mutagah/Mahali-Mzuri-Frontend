import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RoomPage.css";
import LoginorSignupModal from "../../components/LoginorSignupModal";
import React, { useEffect, useState } from "react";
export default function RoomPage() {
  // fetching rooms data
  const baseUrl = "http://[::1]:3000/api/v1/room_types";
  const [roomTypes, setRoomTypes] = useState([]);
  const [show, setShowLogInorSignUpModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setRoomTypes(response.data);
    });
  }, []);
  // function handleRoomClick(index){
  //    window.localStorage.getItem("token") === null ? setShowLogInorSignUpModal(true): navigate(`/specific-room/${index + 1}`)
  // }
  function handleClose() {
    setShowLogInorSignUpModal(false);
  }
  return (
    <main>
      <div className="container-fluid" style={{ backgroundColor: "#e0e0f0" }}>
        <div className="row text-center py-2">
          <h1 style={{ fontWeight: "bold" }}>
            A &nbsp;
            <i style={{ color: "#f17a12", textDecoration: "none" }}>World</i>
            &nbsp; Of &nbsp;
            <i style={{ color: "#f17a12", textDecoration: "none" }}>Choice</i>
          </h1>
        </div>
        <div className="row  pb-2">
          {roomTypes.map((roomType, index) => {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div
                  className="card m-3 example rounded-5"
                  style={{
                    maxHeight: "350px",
                    cursor: "pointer",
                    overflowY: "scroll",
                    border: "5px solid #f17a12",
                  }}
                  onClick={() =>
                    window.localStorage.getItem("token") === null
                      ? setShowLogInorSignUpModal(true)
                      : navigate(`/specific-room/${index + 1}`)
                  }
                >
                  <img
                    className="card-img-top px-4 pt-4 rounded-5 img-fluid"
                    src={roomType.image1}
                    alt="View Hotel"
                    style={{ maxHeight: "300px" }}
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <h3 className="card-title">{roomType.room_type}</h3>
                    </div>
                    <div className="d-flex justify-content-center mx-3 mb-3">
                      <p className="card-text">{roomType.description}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="rounded-3 btn btn-lg"
                        style={{
                          backgroundColor: "#f17a12",
                        }}
                        onClick={() =>
                          window.localStorage.getItem("token") === null
                            ? setShowLogInorSignUpModal(true)
                            : navigate(`/specific-room/${index + 1}`)
                        }
                      >
                        View rooms
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LoginorSignupModal show={show} handleClose={handleClose} />
    </main>
  );
}
