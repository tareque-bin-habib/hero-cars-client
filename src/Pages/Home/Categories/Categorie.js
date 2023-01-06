import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Services from './Services/Services';

const Categorie = () => {
    let { brand } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                return setData(data.filter(categorie => categorie.brand === brand))
            })
    }, [])
    console.log(data)

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10'>
            {

                data.map(services => <Services key={services._id} services={services}></Services>)

            }
        </div>
    );
};

export default Categorie;