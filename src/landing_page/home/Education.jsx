import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row border border-3">
        <div className="col-6 border text-center my-auto">
          <img
            className="edu-image w-80 border"
            src="media/image/education.svg"
            alt="Education Image"
          />
        </div>

        <div className="col-6 p-5 border border-2">
          <h1 className="fs-2 mb-3">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-decoration-none" href="">
            Versity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-decoration-none" href="">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
