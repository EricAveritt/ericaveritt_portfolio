import React from "react";
import "./App.css";
import kyoto from "./aboutMeKyoto.jpg";

export default function About() {
  return (
    <div className="ea-about-area">
      <div className="container">
        <div className="ea-section-title">
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={kyoto}
              alt="eric averitt in kyoto"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <div className="ea-about-content">
              <h3>I am Eric Averitt</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
