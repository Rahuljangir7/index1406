import React, { useEffect } from "react";
import Card from "../utility/Card";
import About from "../pages/about/About";
import { categoriesBlog } from "../data";
import { useLocation } from "react-router-dom";

const CategoriesBlog = () => {
  const location = useLocation();

  return (
    <>
      {categoriesBlog.map((item, idx) =>
        item.link === location.pathname ? (
          <div key={idx} className="blogpage">
            <About title={item.name} des={item.para} />

            <div className="blogpage-section">
              <Card
                img={item.card.image}
                date={item.card.date}
                heading={item.card.title}
                para={item.card.des}
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
