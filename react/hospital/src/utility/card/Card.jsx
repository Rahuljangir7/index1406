import "./card.css";
import React from "react";

export const Card = ({ heading, title, des, icon, heading5, para }) => {
  return (
    <>
      <div className="links-container">
        <h4>{heading}</h4>
        <h2>{title}</h2>
        <p>{des}</p>

        <div className="card-section">
          <div>
            <i className={icon}></i>
          </div>
          <h5>{heading5}</h5>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};
