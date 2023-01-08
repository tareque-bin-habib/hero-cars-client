import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch('https://hero-cars-server-five.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)
            })
    }, [])

    const handleMakeAdmin = id => {
        fetch(`https://hero-cars-server-five.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin Successfully')
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-indigo-600 mb-6'>All Users</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map((all, i) => <tr key={all._id}>
                                <th>{i + 1}</th>
                                <td className='font-bold'>{all.name}</td>
                                <td className='font-bold'>{all.email}</td>
                                <td>{all?.role !== 'admin' && < button onClick={() => handleMakeAdmin(all._id)} className="btn btn-primary btn-xs">Make Admin</button>}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;