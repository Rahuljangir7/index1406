import React from "react";
import { useParams } from "react-router-dom";
import { blogPageDeail } from "../data";
import BlogDetail from "../pages/blogdetail/BlogDetail";
import PageNotFound from "../pages/notfound/PageNotFound";

const BlogPageDetail = () => {
  const { blogpagedetail } = useParams();

  const blogData = blogPageDeail.find((item) => item.link == blogpagedetail);

  if (!blogData) {
    return <PageNotFound />;
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
