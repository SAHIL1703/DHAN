import React from 'react'

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media/image/smallcaseLogo.png" className='mx-auto' style={{width:"65%"}} />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media/image/zerodhaFundhouse.png" className='mx-auto' style={{width:"65%"}} />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media/image/sensibullLogo.svg" className='mx-auto' style={{width:"65%"}}  />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media\image\dittoLogo.png" className='mx-auto' style={{width:"65%"}}  />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media/image/streakLogo.png" className='mx-auto' style={{width:"65%"}}  />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <div className="row ">
            <img src="media/image/goldenpiLogo.png" className='mx-auto' style={{width:"65%"}}  />
          </div>
          <div className="row">
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        </div>
        
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}

export default Universe