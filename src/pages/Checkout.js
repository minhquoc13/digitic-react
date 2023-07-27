import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 bg-white">
              <div className="checkout-left p-3">
                <h3 className="website-name">Digitic</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li class="breadcrumb-item active" aria-current="page">
                      Infomation
                    </li>
                    &nbsp; /
                    <li class="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp; /
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Infomation</h4>
                <p className="user-gmail">mq19052002@gmail.com</p>
                <h4 className="title">Shipping address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite, etc"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select state
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to="/cart"
                        className="text-dark d-flex align-items-center gap-2"
                      >
                        <BiArrowBack></BiArrowBack> Return to cart
                      </Link>
                      <Link to="/shipping" className="button">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 shipping">
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <div className="w-75 d-flex gap-15">
                    <div className="w-25 position-relative ">
                      <span
                        style={{ top: "-6px", right: "-6px" }}
                        className="badge bg-secondary rounded-circle p-2 text-white position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="">
                      <h5 className="title">Title product</h5>
                      <p>desc </p>
                    </div>
                  </div>
                  <div className="flex-grow-1 text-end">
                    <h5>$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>$ 10000</p>
                </div>
                <div className="d-flex justify-content-between algin-items-center">
                  <p>Shipping</p>
                  <p>$ 10</p>
                </div>
              </div>
              <div className="d-flex justify-content-between algin-items-center py-4">
                <p className="total">Total</p>
                <p className="total-price">$ 1100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
