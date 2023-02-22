import React from "react";

function LoginPage() {
  return (
    <main>
      <section class="vh-80" style={{ backgroundColor: "white" }}></section>
      <div class="container py-5 h-90">
        <div class="row d-flex justify-content-center align-items-center h-90">
          <div
            class="card"
            style={{
              borderRadius: " 3rem",
              border: "5px solid #f17a12",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div class="row g-0">
              <div
                class="col-md-6 col-lg-6 d-none d-md-flex"
                style={{ justifyContent: "center" }}
              >
                <img
                  src="../m.jpg"
                  alt="logo"
                  class="img-fluid m-4 p-3 rounded-5"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <div
                class="col-md-6 col-lg-6 d-flex align-items-center"
                style={{ justifyContent: "center" }}
              >
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style={{ color: " #ff6219" }}
                      ></i>
                      <span class="h1 fw-bold mb-0"></span>
                    </div>

                    <h1
                      class="d-flex justify-content-center w-normal mb-3 pb-3"
                      style={{ letterSpacing: "2px;" }}
                    >
                      Welcome
                      <span style={{ color: " #ff6219" }}>
                        &nbsp; back,&nbsp;
                      </span>
                      login here
                    </h1>

                    <div className="align-items-center mb-2 py-3">
                      <div className="form-floating rounded border border">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputGroup1"
                          placeholder="Username"
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label htmlFor="floatingInputGroup1">
                          Email address/username
                        </label>
                      </div>
                    </div>

                    <div className=" align-items-center mb-2 py-3">
                      <div className="form-floating rounded border border">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputGroup1"
                          placeholder="Username"
                          style={{
                            borderColor: "#f17a12",
                            borderWidth: "4px",
                          }}
                        />
                        <label htmlFor="floatingInputGroup1">Password</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-3">
                      <button
                        type="button"
                        className="btn btn-lg border-3 my-3"
                        style={{ backgroundColor: "#f17a12" }}
                      >
                        Login
                      </button>
                    </div>

                    <p class="d-flex justify-content-center mb-5 pb-lg-2">
                      Don't have an account?
                      <a href="/signUp" style={{ color: "#f17a12" }}>
                        &nbsp; Sign Up Here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="vh-80" style={{ backgroundColor: "white" }}>
        <div class="container py-5 h-90">
          <div class="row d-flex justify-content-center align-items-center h-90">
            <div class="col col-xl-10">
              <div
                class="card"
                style={{
                  borderRadius: " 3rem",
                  border: "5px solid #f17a12",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <div class="row g-0">
                  <div
                    class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="../m.jpg"
                      alt="logo"
                      class="img-fluid m-4 rounded-4"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style={{ color: " #ff6219" }}
                          ></i>
                          <span class="h1 fw-bold mb-0"></span>
                        </div>

                        <h2
                          class="d-flex justify-content-center w-normal mb-3 pb-3"
                          style={{ letterSpacing: "2px;" }}
                        >
                          Welcome
                          <span style={{ color: " #ff6219" }}>&nbsp; back</span>
                        </h2>

                        <div className="align-items-center mb-2">
                          <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px",
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">
                              Email address/username
                            </label>
                          </div>
                        </div>

                        <div className=" align-items-center mb-2">
                          <div className="form-floating rounded border border">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInputGroup1"
                              placeholder="Username"
                              style={{
                                borderColor: "#f17a12",
                                borderWidth: "4px",
                              }}
                            />
                            <label htmlFor="floatingInputGroup1">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-3">
                          <button
                            type="button"
                            // className="rounded border border-3"
                            style={{ backgroundColor: "#f17a12", width: "30%" }}
                          >
                            <a
                              className="text-decoration-none text-dark"
                              href="/"
                            >
                              Login
                            </a>
                          </button>
                        </div>

                        <p class="d-flex justify-content-center mb-5 pb-lg-2">
                          Don't have an account?
                          <a href="/signUp" style={{ color: "#f17a12" }}>
                            Sign Up Here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
