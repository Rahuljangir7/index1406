// import React from 'react'
import "./service.css";
import { Card } from "../../utility/card/Card";
import { linksData } from "../../contant/data.js";

export const Service = () => {
  return (
    <>
      {linksData.map((item) => {
        return (
          <>
            <Card
              heading={item.heading}
              title={item.title}
              des={item.des}
              icon={item.icon}
              heading5={item.heading5}
              para={item.para}
            />
          </>
        );
      })}
    </>
  );
};
