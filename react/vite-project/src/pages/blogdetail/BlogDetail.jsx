import React from "react";
import "./blogdetail.css";

const BlogDetail = ({ img, date, heading, para }) => {
  return (
    <div className="blogdetail">
      <img src={img} alt="blog image" />
      <div className="blogdetail-container">
        <h2>{date}</h2>
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
