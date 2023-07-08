import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wish List"}></Meta>
      <BreadCrumb title="Wish List"></BreadCrumb>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="cross position-absolute img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image position-relative">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T17.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
