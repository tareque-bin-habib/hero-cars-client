import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer p-20 text-base-content">
            <div>

                <p><span className='font-bold text-indigo-600 text-3xl'>Hero Cars</span></p>
            </div>
            <div>
                <span className="footer-title font-bold text-indigo-600">Services</span>
                <Link to='/' className="link link-hover">Branding</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Marketing</Link>
                <Link to='/' className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title font-bold text-indigo-600">Company</span>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title font-bold text-indigo-600">Legal</span>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;