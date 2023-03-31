import React from 'react';

const Cart = ({cart}) => {
    let totalTime = 0;
    for(const blog of cart){
        totalTime = totalTime + parseInt(blog.time)
    }
    return (
        <div className='sticky top-0'>
            <h3>Spent Time On Read: {totalTime} min</h3>
            <div>
                <h1>Bookmarked Blog:{cart.length}</h1>
                {
                    cart.map(blog=><h2>{blog.description}</h2>)
                }
            </div>
        </div>
    );
};

export default Cart;