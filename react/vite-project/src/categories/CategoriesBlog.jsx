import React, { useEffect } from "react";
import Card from "../utility/Card";
import About from "../pages/about/About";
import { categoriesBlog } from "../data";
import { useParams } from "react-router-dom";
import NotFound from "../pages/notfound/NotFount";

const CategoriesBlog = () => {
  const { category } = useParams();

  return (
    <>
      {categoriesBlog.map((item, idx) =>
        item.link === `/${category}` ? (
          <div key={idx} className="blogpage">
            <About title={item.name} des={item.para} />

            <div className="blogpage-section">
              <Card
                img={item.card.image}
                date={item.card.date}
                heading={item.card.title}
                para={item.card.des}
                linkName={item.card.linkName}
              />
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default CategoriesBlog;
