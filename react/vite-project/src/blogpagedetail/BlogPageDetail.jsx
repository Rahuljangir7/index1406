import React from "react";
import { useParams } from "react-router-dom";
import { blogPageDeail } from "../data";
import BlogDetail from "../pages/blogdetail/BlogDetail";
import NotFount from "../pages/notfound/NotFound";

const BlogPageDetail = () => {
  const { blogpagedetail } = useParams();

  const blogData = blogPageDeail.find((item) => item.link == blogpagedetail);

  if (!blogData) {
    return <NotFount />;
  }

  return (
    <BlogDetail
      key={idx}
      img={blogData.blogPage.image}
      date={blogData.blogPage.date}
      heading={blogData.blogPage.title}
      para={blogData.para}
    />
  );
};

export default BlogPageDetail;
