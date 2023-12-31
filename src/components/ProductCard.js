import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import wish from "../images/wish.svg";
import productCompare from "../images/prodcompare.svg";
import wishList from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addCart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);

  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to=":id" className="product-card position-relative d-block">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} className="img-fluid" alt="wish_product" />
          </button>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid w-100"
            alt="product_image"
          />
          <img
            src="images/laptop.jpg"
            className="img-fluid w-100"
            alt="product_image"
          />
        </div>
        <div className="product-details">
          <h6 className="product-brand">Havels</h6>
          <h5 className="product-title">Kids headphone Bulk 10</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`product-desc ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum
            dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit
            amet consectetur adipisicing elit Lorem ipsum dolor, sit amet Lorem
            ipsum dolor, sit amet consectetur adipisicing elit consectetur
            adipisicing elit
          </p>
          <p className="product-price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15 justify-content-center">
            <button className="border-0 bg-transparent">
              <img src={productCompare} alt="action_bar" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="action_bar" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addCart} alt="action_bar" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
