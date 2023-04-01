import React from 'react';
import headerPic from '../../../public/header.jpg'

const Header = () => {
    return (
        <div className='w-auto md:w-[95%] mx-auto shadow border rounded-xl mb-4'>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Programming Blog</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={headerPic} />
        </div>
      </label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;