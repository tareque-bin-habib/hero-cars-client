import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2023/toyotacrown/platinum/4030/2yz/36/5.png?fm=webp&&w=768&h=328&q=90" alt="Shoes" className="rounded-xl mt-10" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title font-bold ">Toyota</h2>
                        <p>Toyota Motor Corporation  Toyota Jidōsha kabushikigaisha, is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year.</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Toyota`}><button className="btn btn-primary m-10">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://global.honda/products/assets/automobiles/img/img-models05.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title font-bold">Honda</h2>
                        <p>Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft, power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Honda`}><button className="btn btn-primary m-10">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.honda.com.bd/assets/dhs/images/brv/Exterior/Br-Vwebbanner.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Nissan</h2>
                        <p>Nissan is a global car manufacturer that sells a full line of vehicles under the Nissan, INFINITI and Datsun brands. Nissan's global headquarters in Yokohama, Japan, manages operations in four regions: Japan-ASEAN, China, Americas, and AMIEO (Africa, Middle East, India, Europe & Oceania).</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Nissan`}><button className="btn btn-primary m-10">See more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;