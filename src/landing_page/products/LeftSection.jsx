import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  console.log(imageURL);

  return (
    <div className="container">
      <div className="row border">
        <div className="col-6 p-5 text-center border">
          <img src={imageURL} alt=""  style={{width:"60%"}}  />
        </div>
        <div className="col-6 p-5 border">
          <h1 className=" " >{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <div className="row">
              <div className="col-4">
                <a href={googlePlay}>
                  <img src="media/image/googlePlayBadge.svg" />
                </a>
              </div>
              <div className="col-4">
                <a href={appStore}>
                  <img src="media/image/appstoreBadge.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
