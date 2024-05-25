import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-1 ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg cursor-pointer hover:underline">{post.title}</span>
      </NavLink>
      <p className="text-[14px]">
        By&nbsp;
        <span>{ post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold hover:underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[14px]">Posted on {post.date}</p>
      <p  className="text-[16px] ">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
