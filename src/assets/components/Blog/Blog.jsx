import React from 'react';
import slider from '../../../../public/slider-1.jpg'

const Blog = (props) => {
    const {name,description,published,time,profile} = props.blog
    return (
        <div>
            <div className="card w-[80%] bg-base-100 shadow-xl">
  <figure><img src={slider} alt="Shoes" /></figure>
  
  <div className="flex justify-between items-center gap-4 pt-6">
    <div className='flex'>
    <img className='rounded-full w-18 h-14' src={profile} alt="" />
    <div>
    <p className='text-xl font-bold'>{name}</p>
    <p className='text-base font-light'>{published}(04 Days Ago)</p>
    </div>
    
    </div>
    <div className=''>
        <p className=''>{time}Min Read</p>
    </div>
    </div>
    <div>
        <h3 className='text-start'>{description}</h3>
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