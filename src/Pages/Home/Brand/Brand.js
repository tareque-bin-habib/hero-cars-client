import React from 'react';
import toyota from '../../../image/brands/download.png'
import honda from '../../../image/brands/download.jpg'
import volvo from '../../../image/brands/logo_Volvo.png'
import nissan from '../../../image/brands/logo_bnw.png'

const Brand = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-4xl'>Top Seller all over the world <span className='text-indigo-600 text-5xl'>World</span></h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-20 items-center my-20'>
                <div>
                    <img className='w-45' src={toyota} alt="" />
                </div>
                <div>
                    <img className='w-25' src={honda} alt="" />
                </div>
                <div>
                    <img className='w-25' src={volvo} alt="" />
                </div>
                <div>
                    <img className='w-30' src={nissan} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;