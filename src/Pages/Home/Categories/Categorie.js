import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Services from './Services/Services';

const Categorie = () => {
    let { brand } = useParams();
    const [data, setData] = useState([])
    const [carName, setCarName] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                return setData(data.filter(categorie => categorie.brand === brand))
            })
    }, [])
    console.log(data)

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10'>
                {

                    data.map(services => <Services key={services._id} services={services} setCarName={setCarName}></Services>)

                }
            </div>
            {
                carName &&
                <BookingModal carName={carName} setCarName={setCarName}></BookingModal>
            }
        </div>
    );
};

export default Categorie;