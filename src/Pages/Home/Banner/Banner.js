import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../image/essentials/mclaren-orange-big-removebg-preview.png'
const Banner = () => {
    return (
        <div className='py-40 '>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="w-1/2 rounded-lg" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Buy The Best Quality Car's <br />
                            From Us
                        </h1>
                        <p className="py-6">A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people</p>
                        <Link to='/'><button className="btn btn-active bg-indigo-600 border-0 text-white">Learn more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;