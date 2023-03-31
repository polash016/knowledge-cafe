import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className="flex justify-around w-[95%] mx-auto">
      <div>
        {
            blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
      <div>
        <h1>Spent Time on Read:</h1>
      </div>
    </div>
  );
};

export default Blogs;
