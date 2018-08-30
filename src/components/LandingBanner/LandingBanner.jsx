import React from "react";
import "./LandingBanner.css";

const LandingBanner = props => {
  return (
    <div className="LandingBanner">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i.imgur.com/eo6qWi3.png" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.imgur.com/sk8O9lm.png" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.imgur.com/rkO0Nar.png" alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.imgur.com/mKCNrAq.png" alt="Fourth slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default LandingBanner;
