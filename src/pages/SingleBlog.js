import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="single-blog-card">
              <Link
                to="/blog"
                className="back-to-blog d-flex align-items-center gap-10"
              >
                <HiOutlineArrowLeft></HiOutlineArrowLeft> Go back to blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100"
                alt="blog"
              />
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi libero rerum atque eum magnam aut cumque totam
                doloribus alias ea debitis cupiditate sunt, labore et eaque nemo
                fugiat asperiores sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
