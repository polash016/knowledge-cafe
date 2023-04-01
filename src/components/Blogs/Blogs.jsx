import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [readBlog, setReadBlog] = useState([]);
  const [readTime, setReadTime] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleReadBlog = (blog, id) => {
    const existed = readBlog.find((blog) => blog.id == id);
    if (existed) {
      toast.error("Already Bookmarked");
    } else {
      toast("Succesfully Bookmarked");
      const newReadBlog = [...readBlog, blog];
      setReadBlog(newReadBlog);
    }
  };
  const handleReadTime = (time) => {
    const newReadTime = [...readTime, time];
    setReadTime(newReadTime);
  };
  return (
    <div className="md:grid md:grid-cols-4 w-[95%] mx-auto">
      <div className="col-span-3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleReadBlog={handleReadBlog}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
      <div className="bg-slate-100 w-full">
        <Cart cart={readBlog} time={readTime}></Cart>
      </div>
    </div>
  );
};

export default Blogs;
