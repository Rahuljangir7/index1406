import React from "react";
import "./about.css";

let desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const About = ({ title = "About Us", des = desc }) => {
  return (
    <div className="about">
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
};

export default About;
