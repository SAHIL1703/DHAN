import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-3 mb-3">
      <div className="row border">
        <div className="col-6 p-5 border">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6  text-center border">
          <img src={imageURL} alt="" style={{ width: "70%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
