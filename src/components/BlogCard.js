import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">12 June 2022</p>
          <h1 className="title">Lorem ipsum dolor sit amet consectetur</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa
            et nam odit autem, esse impedit, tempore necessitatibus unde soluta
            aliquid earum facilis dolor a cum deserunt ut iure voluptatum!
          </p>
          <Link to="/" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
