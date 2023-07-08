import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}></Meta>
      <BreadCrumb title="Compare Products"></BreadCrumb>
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="cross position-absolute img-fluid"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T17.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Brand:</h6>
                      <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Type:</h6>
                      <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Availability:</h6>
                      <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Color:</h6>
                      <Color></Color>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="cross position-absolute img-fluid"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T17.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Brand:</h6>
                      <p className="mb-0">Havels</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Type:</h6>
                      <p className="mb-0">Watch</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Availability:</h6>
                      <p className="mb-0">In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Color:</h6>
                      <Color></Color>
                    </div>
                    <div className="product-detail">
                      <h6 className="brand mb-0">Size:</h6>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
