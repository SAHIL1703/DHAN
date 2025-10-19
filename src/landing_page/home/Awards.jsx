import React from "react";

const Awards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 border border-2">
          <img src="media/image/largestBroker.svg" alt="lagest-broker image" />
        </div>

        <div className="col-6 p-5 border border-2 my-3">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p className="mb-5 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img className="w-100" src="media/image/pressLogos.png" alt="Press-Logo" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
