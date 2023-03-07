import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="about ">
      <h1>ABOUT US</h1>
      <div className="body">
        <div className="about-details">
          <p>
            Mahali Mzuri hotel offers a luxurious stay with all the amenities
            you need. Enjoy delicious food and drinks in the restaurant, relax
            in the bar, and get a good night's sleep in one of our comfortable
            rooms. Our friendly staff will make sure your stay is enjoyable and
            memorable. We also offer a variety of activities to keep you
            entertained during your stay. Whether you're looking for a romantic
            getaway or just want to escape from the hustle and bustle of
            everyday life, this is the perfect place for you.
          </p>
          <button onClick={() => navigate("/z")}>Explore</button>
        </div>
        <div className="about-imgs">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://imgs.search.brave.com/jGmjxHnmlw_uiY6MdAIKEUZbt7KVzcdm1Tpbhilt64Q/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/d0oycEtGRjVxT0Fl/aXlKUHd2bFJBSGFF/OCZwaWQ9QXBp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://imgs.search.brave.com/Jghgugx412wy3M-9hlwihN8i6HdzSoKpUjgT9Yky06w/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/eVFiREZPOGJ3N0dV/Y3ZrUVhCTXVBSGFF/OCZwaWQ9QXBp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://imgs.search.brave.com/IOfnl4p78ZkGoomgP_Njb2v5TEtHolxawbj48jhEvfg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/Z0htQ2EycWZYLVAw/bnlIdGhsWlNBSGFF/OCZwaWQ9QXBp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
