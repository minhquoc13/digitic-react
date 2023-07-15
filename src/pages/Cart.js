import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";

import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <BreadCrumb title="Cart"></BreadCrumb>

      <section className="cart-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-item d-flex mb-2 justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img className="img-fluid " src={watch} alt=" " />
                  </div>
                  <div className="w-75 ">
                    <p>Title Product</p>
                    <p>Size: S</p>
                    <p>Color: Red</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-2"></AiFillDelete>
                  </div>
                </div>
                <div className="cart-col-4"></div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue to shopping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>Sub total: $100.00</h4>
                  <p>Taxes and shipping caculated at checkout</p>
                  <Link className="button" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
