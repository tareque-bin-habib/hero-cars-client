import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signInEmail, createWithGmail } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => setError('You enter a wrong password'))

    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        createWithGmail(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }



    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <h1 className='text-center text-indigo-600 font-bold text-2xl'>Please Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your Password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover font-bold">New in Hero Cars? <Link to='/register' className='text-indigo-600'>Please Resister</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-center py-5'>
                        <Link onClick={handleGoogle}><FaGoogle className='text-2xl text-blue-500'></FaGoogle></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;