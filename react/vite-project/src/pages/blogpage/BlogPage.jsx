import React from "react";
import "./blogpage.css";
import img1 from "../../assets/img1.avif";
import img5 from "../../assets/img5.avif";
import img6 from "../../assets/img6.avif";
import About from "../about/About";
import Card from "../../utility/Card";

const cardJson = [
  {
    image: img1,
    date: "28 oct 2024",
    title: "This is my third & latest post",
    des: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  },
  {
    image: img5,
    date: "24 oct 2024",
    title: "This is my second post",
    des: "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    image: img6,
    date: "20 oct 2024",
    title: "This is my first post",
    des: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
  },
];

const BlogPage = () => {
  return (
    <div className="blogpage">
      <About
        title="The Blog"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu commodo, sodales nibh sed, efficitur sapien."
      />

      <div className="blogpage-section">
        {cardJson.map((item,idx) => (
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
