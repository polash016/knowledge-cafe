import React from 'react';

const Cart = ({cart,time}) => {
    let totalTime = 0;
    for(const blog of time){
        totalTime = totalTime + parseInt(blog.time)
    }
    return (
        <div className='sticky top-0'>
            <h3 className='mb-4 text-emerald-400 border rounded-lg border-emerald-500  text-2xl font-bold'>Spent Time On Read: {totalTime} min</h3>
            <div>
                <h1 className='mb-4 text-2xl font-bold'>Bookmarked Blog:{cart.length}</h1>
                {
                    cart.map(blog=><h2 className='mt-4 mb-4 bg-white border rounded-lg text-lg font-semibold' key={blog.id}>{blog.description}</h2>)
                }
            </div>
        </div>
    );
};

export default Cart;