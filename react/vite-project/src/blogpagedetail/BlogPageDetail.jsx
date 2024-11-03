import React from "react";
import { useParams } from "react-router-dom";
import { blogPageDeail } from "../data";
import BlogDetail from "../pages/blogdetail/BlogDetail";
import NotFount from "../pages/notfound/NotFount";

const BlogPageDetail = () => {
  const { blogpagedetail } = useParams();

  return (
    <>
      {blogPageDeail.map((item, idx) => {
        return item.link === blogpagedetail ? (
          <BlogDetail
            key={idx}
            img={item.blogPage.image}
            date={item.blogPage.date}
            heading={item.blogPage.title}
            para={item.para}
          />
        ) : idx === 1 ? (
          <NotFount />
        ) : (
          ""
        );
      })}
    </>
  );
};

export default BlogPageDetail;
