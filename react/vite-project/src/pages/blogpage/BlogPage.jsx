import React from "react";
import "./blogpage.css";
import {cardJson} from "../../data";
import About from "../about/About";
import Card from "../../utility/Card";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <About
        title="The Blog"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu commodo, sodales nibh sed, efficitur sapien."
      />

      <div className="blogpage-section">
        {cardJson.map((item, idx) => (
          <Card
            key={idx}
            img={item.image}
            date={item.date}
            heading={item.title}
            para={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
