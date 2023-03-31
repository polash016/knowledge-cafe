import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
    const handleReadTime = (blog,id) => {
      
      const existed = time.find(blog => blog.id == id)
        if(existed){
          toast.success('why')
        }
        else{
          const newTime = [...time,blog];
        setTime(newTime)
        }
    };
  return (
    <div className="grid grid-cols-4 w-[95%] mx-auto">
      <div className="col-span-3">
        {
            blogs.map(blog=><Blog key={blog.id} blog={blog} handleReadTime={handleReadTime}></Blog>)
        }
      </div>
      <div className="bg-slate-100">
        <Cart cart={time}></Cart>
      </div>
    </div>
  );
};

export default Blogs;
