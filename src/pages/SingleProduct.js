import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { FcShipped } from "react-icons/fc";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://images.squarespace-cdn.com/content/v1/550b2072e4b0d3cbec5358d7/1556724168509-XQNGRCU5UCI7MOVZQN5P/DSC_4318.jpg?format=2500w",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name"></BreadCrumb>

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="/images/laptop.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/laptop.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/laptop.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/laptop.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Headphone Bulk 10</h3>
                </div>
                <div className="border-bottom py-3 d-flex flex-column gap-1">
                  <p className="price mb-0">$ 100</p>
                  <div className="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 review-count">(2 reviews)</p>
                  </div>
                  <a className="review-button" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading mb-0">Type:</h4>{" "}
                    <p className="product-info mb-0">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading mb-0">Brand:</h4>{" "}
                    <p className="product-info mb-0">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading mb-0">Tags:</h4>{" "}
                    <p className="product-info mb-0">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h4 className="product-heading mb-0">Availability:</h4>{" "}
                    <p className="product-info mb-0">In stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h4 className="product-heading mb-0">Size:</h4>{" "}
                    <div className="size-list d-flex flex-wrap gap-10">
                      <div className="badge border border-2 text-dark bg-white border-secondary">
                        S
                      </div>
                      <div className="badge border border-2 text-dark bg-white border-secondary">
                        M
                      </div>
                      <div className="badge border border-2 text-dark bg-white border-secondary">
                        L
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h4 className="product-heading mb-0">Colors:</h4>{" "}
                    <Color></Color>
                  </div>
                  <div className="d-flex gap-2 flex-row align-items-center mt-2 mb-3">
                    <h4 className="product-heading mb-0">Quantity:</h4>{" "}
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-15 ms-5">
                      <button className="button">Add to card</button>
                      <Link
                        className="button signup button-buynow"
                        to="/signup"
                      >
                        Buy now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 mb-4">
                    <div>
                      <a href="/">
                        <TbGitCompare className="fs-5 me-2"></TbGitCompare> Add
                        to compare
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2"></AiOutlineHeart>{" "}
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button border-0 p-3 bg-white text-dark"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <FcShipped className="fs-5 me-2"></FcShipped>
                            Shipping & return
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4 className="heading"> Desciption:</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus eos eveniet expedita assumenda corrupti facilis hic
                  maiores tempore, illo fugiat nobis necessitatibus dolorum
                  quisquam voluptates quia quos exercitationem. Qui, sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="heading ps-3">Reviews</h4>
              <div className="review-inner-wrapper p-3">
                <div className="review-head d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="title mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="m-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div id="review" className="review-form mt-3">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      size={24}
                      value="5"
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="10"
                        rows="4"
                        placeholder="Type your review..."
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0" type="Submit">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="review-list">
                  <div className="review">
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0">minh quoc</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure nisi, molestias dicta aliquid enim tempora placeat
                      laboriosam vitae totam impedit temporibus illum quis non
                      nihil minus, a nostrum, qui voluptatem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <div className="blog-list col-8 d-flex">
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
