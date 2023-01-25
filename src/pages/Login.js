import React from "react";

function Login() {
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "black" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: " 1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE4fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="login form"
                      class="img-fluid p-2 mt-2 rounded-4"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
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
                          <span class="h1 fw-bold mb-0">
                            <img src="../m.jpg" alt="" />
                          </span>
                        </div>

                        <h5
                          class="d-flex justify-content-center w-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px;" }}
                        >
                          Welcome back @ username
                        </h5>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example17">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                          />
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-3">
                          <button
                            type="button"
                            class="btn btn-light btn-lg border border-info"
                          >
                            <a className="display-none" href="/">
                              Login
                            </a>
                          </button>
                        </div>

                        <p class="mb-5 pb-lg-2">
                          Don't have an account?
                          <a href="/signUp" style={{ color: "#393f81" }}>
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
    </>
  );
}

export default Login;
