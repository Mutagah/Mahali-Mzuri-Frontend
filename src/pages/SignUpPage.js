import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const employees = ["Manager", "Administrator", "Rooms", "Cook", "Security"];
  const [signUpCredentials, setSignUpCredentials] = useState({});
  const [errors, setErrors] = useState([]);
  const [whichEmployee, setWhichEmployee] = useState("");
  const navigate = useNavigate();
  function navigation() {
    navigate("/login");
  }
  function notify() {
    toast.success(
      "You have successfully created your account, please login with details just created",
      {
        position: "top-center",
      }
    );
  }
  const handleChange = (event) => {
    setSignUpCredentials({
      ...signUpCredentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignUpCredentials = async (event) => {
    event.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpCredentials),
    };
    try {
      const fetchResponse = await fetch(
        "https://mahali-mzuri-api.onrender.com/api/v1/users",
        settings
      );
      const data = await fetchResponse.json();
      if (fetchResponse.status === 422) {
        setErrors([...data.errors]);
      } else {
        setErrors([]);
        notify();
        setTimeout(navigation, 7000);
      }
    } catch (e) {
      return e;
    }
  };
  return (
    <main className="vh-80" style={{ backgroundColor: "#e0e0f0" }}>
      <div className="container py-5 h-90">
        <div className="row d-flex justify-content-center align-items-center h-90">
          <div
            className="card"
            style={{
              borderRadius: " 3rem",
              border: "5px solid #f17a12",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div className="row g-0">
              <div
                className="col-md-12 col-lg-6 d-flex align-items-center"
                style={{ justifyContent: "center" }}
              >
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleSignUpCredentials}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0"></span>
                    </div>

                    <h2 className="d-flex justify-content-center w-normal mb-3 pb-3">
                      Create
                      <span style={{ color: " #ff6219" }}>
                        &nbsp; Account &nbsp;
                      </span>
                      here
                    </h2>

                    <div className="align-items-center mb-2 py-1">
                      <div className="form-floating rounded border border">
                        <input
                          type="text"
                          className="form-control"
                          name="email_address"
                          onInput={(event) => handleChange(event)}
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label>Email address</label>
                      </div>
                    </div>

                    <div className="align-items-center mb-2 py-1">
                      <div className="form-floating rounded border border">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          onInput={(event) => handleChange(event)}
                          placeholder="Username"
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label>Username</label>
                      </div>
                    </div>

                    <div className=" align-items-center mb-2 py-1">
                      <div className="form-floating rounded border border">
                        <input
                          type="password"
                          className="form-control"
                          data-toggle="password"
                          onInput={(event) => handleChange(event)}
                          name="password"
                          placeholder="password"
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label>Password</label>
                      </div>
                    </div>

                    <div className=" align-items-center mb-2 py-1">
                      <div className="form-floating rounded border border">
                        <input
                          type="password"
                          className="form-control"
                          data-toggle="password"
                          onInput={(event) => handleChange(event)}
                          name="password_confirmation"
                          placeholder="password"
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label>Confirm password</label>
                      </div>
                    </div>
                    <fieldset>
                      <h5 style={{ color: " #ff6219" }}>Select your role:</h5>
                      <div>
                        <input
                          type="radio"
                          name="role"
                          value="client"
                          onInput={(event) => {
                            handleChange(event);
                            setWhichEmployee("");
                          }}
                        />
                        &nbsp;
                        <label>Customer</label>
                        &nbsp; &nbsp; &nbsp;
                        <div>
                          <input
                            type="radio"
                            name="role"
                            value="selectEmployee"
                            onInput={(event) =>
                              setWhichEmployee(event.target.value)
                            }
                            disabled
                          />
                          &nbsp;
                          <label style={{textDecoration:"line-through"}}>Employee</label>
                          <div className="ms-5">
                            {whichEmployee === "selectEmployee"
                              ? employees?.map((emp, index) => {
                                  return (
                                    <div className="form-check" key={index}>
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="role"
                                        value={
                                          emp.charAt(0).toLowerCase() +
                                          emp.slice(1)
                                        }
                                        onInput={(event) => handleChange(event)}
                                      />
                                      <label className="form-check-label">
                                        {emp}
                                      </label>
                                    </div>
                                  );
                                })
                              : " "}
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="ms-5">
                      {errors?.length > 0 && (
                        <ul style={{ color: "red" }} className="fs-5">
                          {errors.map((error) => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-3">
                      <button
                        className="btn btn-lg border-3 my-3"
                        type="submit"
                        style={{
                          backgroundColor: "#f17a12",
                          borderRadius: "10px",
                        }}
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                  <h5 className="d-flex justify-content-center mb-5 pb-lg-2">
                    Have an account?
                    <a
                      href="/login"
                      style={{ color: "#f17a12", textDecoration: "none" }}
                    >
                      &nbsp; <i>Login here</i>
                    </a>
                  </h5>
                </div>
              </div>
              <div
                className="col-lg-6 d-none d-md-none d-lg-flex"
                style={{ justifyContent: "center" }}
              >
                <img
                  src="../m.jpg"
                  alt="logo"
                  className="img-fluid m-4 p-3 rounded-5"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </main>
  );
}

export default SignUp;
