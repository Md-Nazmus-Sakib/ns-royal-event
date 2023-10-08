import React from 'react';
import logo from '../../assets/Images/Logo/logo1.png'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=' p-10 bg-neutral text-neutral-content' >
                <div className="flex justify-center flex-col items-center text-center md:flex-row md:justify-around">
                    <aside>
                        <img className='w-24 mx-auto' src={logo} alt="" />
                        <p>NS ROYAL EVENT<br />Providing reliable organization since 2023</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4 text-3xl">
                            <a href='https://twitter.com/'><FaTwitter></FaTwitter></a>
                            <a href='https://www.youtube.com/'><FaYoutube></FaYoutube></a>
                            <a href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>

                        </div>
                    </nav>
                </div>
                <p className='text-center my-6'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;