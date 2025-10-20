import React from "react";

const Team = () => {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row text-center border-top  pt-4 mb-4">
        <h1>People</h1>
      </div>

      {/* People Section */}
      <div className="row justify-content-center h-auto">
        <div className="col-md-6 col-sm-12 p-3 border text-center">
          <img
            src="media/image/nithinKamath.jpg"
            alt="founder"
            style={{
              borderRadius: "50%",
              width: "230px",
              height: "230px",
              objectFit: "cover",
            }}
          />
          <h4 className="mt-3 text-muted">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Uncomment this block to add more people */}
        
        <div className="col-md-6 col-sm-12 p-3 border text-muted fs-6" style={{lineHeight:"1.5rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Team;
