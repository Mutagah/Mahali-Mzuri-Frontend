import React, { useState } from "react";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginCredentials = async (event) =>  {
    event.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login_id: loginId, password: password }),
    }

    try {
      const fetchResponse = await fetch("http://[::1]:3000/api/v1/login",settings)
      const data =  await fetchResponse.json()
      console.log(data)
      return data
    }
      catch (e){
        console.log(e)
        return e;
      }
    }
  return (
    <main className="vh-80">
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

              <div
                className="col-md-12 col-lg-6 d-flex align-items-center"
                style={{ justifyContent: "center" }}
              >
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleLoginCredentials}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0"></span>
                    </div>

                    <h2 className="d-flex justify-content-center w-normal mb-3 pb-3">
                      Welcome,
                      <span style={{ color: " #ff6219" }}>
                        &nbsp; login &nbsp;
                      </span>
                      here
                    </h2>

                    <div className="align-items-center mb-2 py-3">
                      <div className="form-floating rounded border border">
                        <input
                          type="text"
                          onChange={(event) => setLoginId(event.target.value)}
                          className="form-control"
                          name="loginId"
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
                          type="password"
                          className="form-control"
                          onChange={(event) => setPassword(event.target.value)}
                          data-toggle="password"
                          placeholder="password"
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
                        className="btn btn-lg border-3 my-3"
                        type="submit"
                        style={{
                          backgroundColor: "#f17a12",
                          borderRadius: "10px",
                        }}
                      >
                        Login
                      </button>

                      {/* <button
                        type="button"
                        className="btn btn-lg border-3 my-3"
                        style={{ backgroundColor: "#f17a12" }}
                        onClick={handleLoginCredentials}
                      >
                        Login
                      </button> */}
                    </div>
                  </form>
                  <h5 className="d-flex justify-content-center mb-5 pb-lg-2">
                    Don't have an account?
                    <a
                      href="/signUp"
                      style={{ color: "#f17a12", textDecoration: "none" }}
                    >
                      &nbsp; <i>Sign Up Here</i>
                    </a>
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

export default LoginPage;
