import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wish_product" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product_image"
          />
          <img
            src="images/laptop.jpg"
            className="img-fluid"
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
      </div>
    </div>
  );
};

export default ProductCard;
