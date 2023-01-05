import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold"><span className='text-indigo-600'>Hello</span> there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to='/'><button className="btn btn-active bg-indigo-600 border-0 text-white">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;