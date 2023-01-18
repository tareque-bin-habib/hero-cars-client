import React from 'react';
import { Link } from 'react-router-dom';

const Map = () => {
    return (
        <div className="hero my-20 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png" className="lg:w-1/2  rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="lg:text-5xl font-bold py-4">Get in touch with <br />
                        <span className='text-bold text-indigo-500'>Hero</span> Cars
                    </h1>
                    <p className="py-6">A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people</p>
                    <Link to='/register'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Map;