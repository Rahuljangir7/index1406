import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ img, date, heading, para, linkName, blogPageLink }) => {
  return (
    <div className="card-section">
      <Link to={blogPageLink}>
        <img src={img} alt="blogpage image" />
      </Link>
      <div className="cardBox">
        <div>{date}</div>
        <h3>{heading}</h3>
        <p>{para}</p>
        <h6>
          <Link to={linkName}>
            READ ARTICLE <FaAngleRight />
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Card;
