import React from "react";
import "./blog.css";
import { Artical } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Artical
            imgUrl={blog01}
            date="feb 23, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Artical
            imgUrl={blog02}
            date="feb 23, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgUrl={blog03}
            date="feb 23, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgUrl={blog04}
            date="feb 23, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Artical
            imgUrl={blog05}
            date="feb 23, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
