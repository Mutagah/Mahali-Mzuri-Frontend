import React from "react";
export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#e0e0f0" }}>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            aria-label="Slide 1"
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
          <button
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
          <button
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
          <button
            aria-label="Slide 4"
            data-bs-slide-to="3"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
        </div>

        <div className="carousel-inner" style={{ height: "650px" }}>
          <div className="carousel-item active">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <div className="carousel-caption">
              <h5>Write With Us!</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption">
              <h5>Authenticity</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption">
              <h5>Authenticity</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
              {/* <p><a className="btn btn-warning mt-3" href="#">Learn More</a>
                  </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80"
            />
            <div className="carousel-caption">
              <h5>True Champions</h5>
              <p>
                Deepen readers understanding of the world and to empower writers
                to share their best work and biggest ideas.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="p-4 container text-center">
          <div className="row">
            <div className="col">
              <div
                className="card m-3"
                style={{ borderColor: "#f17a12", borderWidth: "4px" }}
              >
                <div className="card-body">
                  <a href="/drinks" className="p-3 text-decoration-none">
                    ????
                  </a>
                  <a
                    className="text-decoration-none text-dark"
                    href="/drinks"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Welcome Drinks
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card m-3"
                style={{ borderColor: "#f17a12", borderWidth: "4px" }}
              >
                <div className="card-body">
                  <a href="/drinks" className="p-3 text-decoration-none">
                    ????
                  </a>
                  <a
                    className="text-decoration-none text-body"
                    href="/drinks"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Rental Cars
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card m-3"
                style={{ borderColor: "#f17a12", borderWidth: "4px" }}
              >
                <div className="card-body">
                  <a href="/drinks" className="p-3 text-decoration-none">
                    ????
                  </a>
                  <a
                    className="text-decoration-none text-body"
                    href="/drinks"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Resort & Spa
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card m-3"
                style={{ borderColor: "#f17a12", borderWidth: "4px" }}
              >
                <div className="card-body">
                  <a href="/drinks" className="p-3 text-decoration-none">
                    ????
                  </a>
                  <a
                    className="text-decoration-none text-dark"
                    href="/drinks"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Free Wifi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
