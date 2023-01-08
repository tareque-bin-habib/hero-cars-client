import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/UserContext';

const Services = ({ services, setCarName }) => {
    const { loading } = useContext(AuthContext)
    const { _id, brand, car_name, orginal_price, resale_price, img } = services

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className='my-5'>
            <div className="card lg:w-96 md:w-96 sm:w-56 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold text-indigo-600"> {car_name}</h2>
                    <h3 className='font-bold'>Brand: {brand}</h3>
                    <p className='font-bold '>Orginal Price: ${orginal_price}</p>
                    <p className='font-bold '>Resale Price: ${resale_price}</p>
                    <div className="card-actions ">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary" onClick={() => setCarName(services)}>Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;