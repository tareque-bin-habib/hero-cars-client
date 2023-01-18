import React from 'react';
import jeep from '../../../image/essentials/jeep.png'
const Jeep = () => {
    return (
        <div className="hero my-10 p-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={jeep} className="rounded-lg" alt='' />
                <div className='lg:pl-10 sm:pl-0'>
                    <h1 className="text-4xl font-bold">Feel The Best <span className='text-indigo-600'>Experience</span> <br /> With Our Cars.</h1>
                    <p className="py-6">A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Jeep;