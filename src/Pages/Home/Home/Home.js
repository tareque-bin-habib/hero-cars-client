import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Categories from '../Categories/Categories';
import Jeep from '../Jeep/Jeep';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Brand></Brand>
            <Categories></Categories>
            <Jeep></Jeep>
            <Map></Map>
        </div>
    );
};

export default Home;