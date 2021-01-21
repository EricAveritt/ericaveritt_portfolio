import React from "react";
import "./App.css";
import ParticlesBg from "particles-bg";

export default function Home() {
  return (
    <div class="ea-home-area">
      <div class="ea-home-canvas">
        <ParticlesBg type="cobweb" color="#51c2d5" bg={true} />
        {/* <canvas id="nokey">Your browser doesn't support canvas.</canvas> */}
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
            <div class="ea-home-content">
              <h1>
                Hi, I'm <span class="color-theme">Eric Averitt</span>
              </h1>
              <p>This is who I am. </p>
              <ul>
                <li>Facebook</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
