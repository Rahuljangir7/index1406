import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./card.css";

const Card = ({ img, date, heading, para }) => {
  return (
    <div className="card-section">
      <img src={img} alt="blogpage image" />
      <div className="cardBox">
        <div>{date}</div>
        <h3>{heading}</h3>
        <p>{para}</p>
        <h6>
          READ ARTICLE <FaAngleRight />
        </h6>
      </div>
    </div>
  );
};

export default Card;
