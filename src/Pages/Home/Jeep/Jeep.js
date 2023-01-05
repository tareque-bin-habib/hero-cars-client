import React from 'react';
import jeep from '../../../image/essentials/jeep.png'
const Jeep = () => {
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={jeep} className="rounded-lg" alt='' />
                <div className='lg:pl-10 sm:pl-0'>
                    <h1 className="text-4xl font-bold">Feel The Best <span className='text-indigo-600'>Experience</span> <br /> With Our Cars.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Jeep;