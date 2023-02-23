import React from "react";

function SignUp() {
  return (
    <div>
      <section style={{ backgroundColor: "black" }}>
        <div className="container h-40">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "85px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <h5 className="text-center h1 fw-bold mb-4 mx-1 mx-md-4">
                        Create<span style={{ color: "#f17a12" }}> Account</span>
                      </h5>

                      <form className="mx-1 mx-md-">
                        <div className="align-items-center mb-2">
                          <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px"
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">
                              Username
                            </label>
                          </div>
                        </div>

                        <div className="align-items-center mb-2">
                        <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px"
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">Email</label>
                          </div>
                        </div>

                        <div className="align-items-center mb-2">
                        <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px"
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="align-items-center mb-2">
                        <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px"
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">
                              Confirm Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-lg-4 mt-3">
                          <button
                            type="button"
                            className="rounded border border-3"
                            style={{ backgroundColor: "#f17a12", width: "30%" }}
                          >
                            <a className="text-decoration-none text-dark" href="/login">
                              Sign Up
                            </a>
                          </button>
                        </div>
                        <p class="d-flex justify-content-center  pb-lg-2">
                          Have an account?
                          <a href="/login" style={{ color: "#f17a12" }}>
                            <button
                              type="button"
                              className="rounded border border-3"
                              style={{ backgroundColor: "#f17a12" }}
                            >
                              <a className="text-decoration-none text-dark" href="/login">
                                Login
                              </a>
                            </button>
                          </a>
                        </p>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        className="border radius-20 rounded-5 m-2"
                        src="../m.jpg"
                        alt=""
                        height="430"
                        width="500"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
