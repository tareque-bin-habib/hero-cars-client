import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Categories from '../Categories/Categories';
import Jeep from '../Jeep/Jeep';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Brand></Brand>
            <Categories></Categories>
            <Jeep></Jeep>
        </div>
    );
};

export default Home;