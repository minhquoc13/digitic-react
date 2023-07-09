import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name"></BreadCrumb>

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="desc-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4> Desciption:</h4>
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
      <section className="reviews-wrapper py-3 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
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
            <div className="col-2">
              <div className="card"></div>
            </div>
            <div className="col-2">
              <div className="card"></div>
            </div>
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
