import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createEmail, createWithGmail } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)

        if (password.length <= 6) {
            setError('password should be 6 charecters')
            return
        }

        if (password !== confirm) {
            setError('password did not matched')
            return
        }
        createEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                saveUser(name, email)
            })
            .catch(error => console.error(error))
    }

    const handlegoogle = () => {
        const provider = new GoogleAuthProvider()
        createWithGmail(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))

    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/')
            })
    }






    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <h1 className='text-center text-indigo-600 font-bold text-2xl'>Please Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover font-bold">Already have an account? <Link to='/login' className='text-indigo-600'>Please Login</Link></p>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-center py-5'>
                        <Link onClick={handlegoogle}><FaGoogle className='text-2xl text-blue-500'></FaGoogle></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;