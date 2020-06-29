import React from "react";
import newImg from "../../assets/pics/recruitask.png";

export default () => {
  return (
    <footer className="page-footer font-small">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 my-auto">
            <img src={newImg} alt="logo"></img>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-6 my-auto">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">ABOUT US</h5>
              </div>
              <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">SITEMAP</h5>
              </div>
              <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">CONTACT US</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
