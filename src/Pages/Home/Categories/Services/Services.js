import React from 'react';

const Services = ({ services }) => {
    const { _id, brand, car_name, orginal_price, resale_price, img } = services
    return (
        <div className='my-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold text-indigo-600"> {car_name}</h2>
                    <h3 className='font-bold'>Brand: {brand}</h3>
                    <p className='font-bold '>Orginal Price: ${orginal_price}</p>
                    <p className='font-bold '>Resale Price: ${resale_price}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;