import React from "react";
import logo from "../../logo.png";
import "./Header.css";

const Header = props => {
  return (
    <div className="Header">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p>Free Shipping on Orders Over $100. </p>
          </div>
          <div class="carousel-item">
            <p>10% discount with student email. </p>
          </div>
          <div class="carousel-item">
            <p>New Releases every week.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
