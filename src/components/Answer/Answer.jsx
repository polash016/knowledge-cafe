import React from 'react';

const Answer = () => {
    return (
        <div className='w-[95%] mx-auto mt-8 mb-8'>
            <h1 className='text-xl font-bold mt-8 mb-8'>Difference Between Props And State.</h1>
            <p><span className='text-xl'>Props</span> is called immutable data that passes data from parent component to child component. It cannot modify data.It is often used to manage data of child component.</p>
            <p className='mt-6 mb-6'><span className='text-xl'>State</span> is called mutable data that manges data within the component. It can modify or change data within the component.</p>
            <h1 className='text-xl font-bold mt-8 mb-8'>How does useState Works.</h1>
            <p><span className='text-xl'>useState</span> hook is a function with two elements. First element is the currents state value & Secons element is a function. The function render data and return and set the current value to first element.</p>
            <h1 className='text-xl font-bold mt-8 mb-8'>What Can useEffect Do Except Data Load.</h1>
            <div><span className='text-xl'>UseEffect</span> hook in react is usually used to fetch data. But it can also perform in a wide range of tasks. Here are some task useEffect can do:
            <ul>
            <li className='font-semibold mt-2'>UseEffect hook can update document title when the component mounts or updates.</li>
            <li className='font-semibold mt-2'>We can use useEffect to add or remove event listeners.</li>
            <li className='font-semibold mt-2'>We can use useEffect to setup animation or timing effect by using `setTimeout`, `setInterval`, `requestAnimationFrame` inside the function.</li>
            <li className='font-semibold mt-2'>UseEffect synchonize state between different components.</li>
            </ul>
            </div>
            <h1 className='text-xl font-bold mt-8 mb-8'>How Does React Works.</h1>
            <p><span className='text-xl'>React</span> is a JavaScript library that is used to build user interfaces for web applications. It follows component based structure where UI elements are broken down and the components can be used in repeatedly. React uses a virtual DOM to proccess the elements. When a component's state or props change, React re-renders the virtual DOM and calculate the difference between the old and new state. Then React update the original DOM only where the changes happened. That's the reason for React's faster and better performance.</p>
        </div>
    );
};

export default Answer;