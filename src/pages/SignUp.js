import React from "react";

function SignUp() {
  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "black" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Create  Account
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              placeholder="Enter your name here..."
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              placeholder="Enter your email here..."
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              placeholder="Confirm Password"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-3">
                          <button
                            type="button"
                            class="btn btn-light btn-lg border border-info"
                          >
                            <a className="display-none" href="/">
                              Sign Up
                            </a>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        class="img-fluid rounded-1 border border-info"
                        src="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE4fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Sample image"
                      />
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
