import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blog = (props) => {
  const { name, description, published, time, profile,img,id } = props.blog;
  return (
    <div>
      <div className="card w-[80%] bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" src={img} alt="Shoes" />
        </figure>

        <div className="flex justify-between items-center gap-4 pt-6">
          <div className="md:flex gap-4">
            <img className="rounded-full w-12 h-12" src={profile} alt="" />
            <div>
              <p className="text-xl font-bold">{name}</p>
              <p className="text-base font-light">{published}(04 Days Ago)</p>
            </div>
          </div>
          <div>
            <p>
              {time} Min Read 
              <span className="cursor-pointer" onClick={()=>props.handleReadBlog(props.blog, id)}>
              <FontAwesomeIcon icon={faBookmark} />
              </span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-start text-xl font-bold mt-8">{description}</h3>
        </div>
        <div className="card-actions justify-start mt-4">
          <div className="badge badge-outline">#beginners</div>
          <div className="badge badge-outline">#programming</div>
        </div>
      <a onClick={()=>props.handleReadTime(props.blog)} className="text-left mt-8 underline text-blue-500" ><button>Mark as read</button></a>
      </div>
    </div>
  );
};

export default Blog;
