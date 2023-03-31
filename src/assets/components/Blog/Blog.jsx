import { faBookBookmark, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import slider from "../../../../public/slider-1.jpg";

const Blog = (props) => {
  const { name, description, published, time, profile } = props.blog;
  return (
    <div>
      <div className="card w-[80%] bg-base-100 shadow-xl">
        <figure>
          <img src={slider} alt="Shoes" />
        </figure>

        <div className="flex justify-between items-center gap-4 pt-6">
          <div className="flex gap-4">
            <img className="rounded-full w-18 h-14" src={profile} alt="" />
            <div>
              <p className="text-xl font-bold">{name}</p>
              <p className="text-base font-light">{published}(04 Days Ago)</p>
            </div>
          </div>
          <div className="">
            <p className="">
              {time} Min Read{" "}
              <span onClick={()=>props.handleReadTime(props.blog)}>
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
      <a className="text-left mt-8" href="/index.html">Mark as read</a>
      </div>
    </div>
  );
};

export default Blog;
