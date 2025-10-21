import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="p-5 mt-5 mb-5" id="supportWrapper">
          <h4 className="fs-4">Support Portal</h4>
          <a className="supportLink" href="">Track Tickets</a>
        </div>

        <div className="row">
          <div className="col-6 p-5 border">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input className="search" placeholder="Eg. how do I activate F&O" />
            <br />
            <div className="searchLink">
              <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
            </div>
            
          </div>
          <div className="col-6 p-5 border">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
