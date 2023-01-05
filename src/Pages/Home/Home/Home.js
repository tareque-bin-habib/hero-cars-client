import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Jeep from '../Jeep/Jeep';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Brand></Brand>
            <Jeep></Jeep>
        </div>
    );
};

export default Home;