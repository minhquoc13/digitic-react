import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

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
          <Link>
            <img
              src="images/wish.svg"
              className="img-fluid"
              alt="wish_product"
            />
          </Link>
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
            <Link>
              <img src="images/prodcompare.svg" alt="action_bar" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="action_bar" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="action_bar" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
