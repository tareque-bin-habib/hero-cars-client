import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';

const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTableData(data)
            })
    }, [])



    return (
        <div>
            <h1 className='text-2xl font-bold text-indigo-600 mb-5'>My Bookings</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Car</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            tableData.map((table, i) => <tr key={table._id}>
                                <th>{i + 1}</th>
                                <td className='font-bold'>{table.name}</td>
                                <td className='font-bold'>{table.brand}</td>
                                <td className='font-bold'>{table.carName}</td>
                                <td className='font-bold'>{table.resale}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;