import React from 'react';
import slider from '../../../../public/slider-1.jpg'
import photo1 from '../../../../public/carousel1.jpg'

const Blog = (props) => {
    const {name,description,published,time} = props.blog
    return (
        <div>
            <div className="card w-[80%] bg-base-100 shadow-xl">
  <figure><img src={slider} alt="Shoes" /></figure>
  <div className="flex items-center gap-4  pt-6">
    <img className='rounded-full w-18 h-14' src={photo1} alt="" />
    <div>
    <p className=''>{name}</p>
    <p>{published}</p>
    </div>
    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  
</div>
        </div>
    );
};

export default Blog;