import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState([])
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    const handleReadTime = (blog) => {
        const newTime = [...time,blog];
        setTime(newTime)
    };
  return (
    <div className="md:flex lg:flex w-[95%] mx-auto">
      <div className="">
        {
            blogs.map(blog=><Blog key={blog.id} blog={blog} handleReadTime={handleReadTime}></Blog>)
        }
      </div>
      <div className="w-[40%]">
        <Cart cart={time}></Cart>
      </div>
    </div>
  );
};

export default Blogs;
