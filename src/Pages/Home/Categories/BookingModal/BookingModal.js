import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/UserContext';

const BookingModal = ({ carName, setCarName }) => {
    const { brand, car_name, orginal_price, resale_price } = carName
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const email = form.email.value;
        const original = form.original.value;
        const resale = form.resale.value;
        const name = form.name.value;
        const phone = form.phone.value;

        const booking = {
            brand,
            carName: car_name,
            email,
            original,
            resale,
            name,
            phone

        }

        fetch('https://hero-cars-server-five.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setCarName(null)
                    toast.success('Booking Confirmed')
                }

            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{car_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-6'>
                        <input type="text" name='brand' disabled placeholder="Type here" value={brand} className="input input-bordered w-full font-bold" />

                        <input type="email" disabled name='email' defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full font-bold" />

                        <span className="label-text font-bold">Original Price</span>
                        <input type="text" name='original' disabled placeholder="Type here" value={orginal_price} className="input input-bordered w-full font-bold" />

                        <span className="label-text font-bold">Resale Price</span>
                        <input type="text" name='resale' disabled placeholder="Type here" value={resale_price} className="input input-bordered w-full font-bold" />

                        <input type="text" disabled name='name' defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered w-full font-bold" />

                        <input type="text" name='phone' placeholder="phone number" className="input input-bordered w-full font-bold" />
                        <br />
                        <input className='w-full btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;