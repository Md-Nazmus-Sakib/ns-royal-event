import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const pages = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/our'}>Our Menu</NavLink></li>

        <li><NavLink to={'/login'}>Login</NavLink></li>
    </>

    return (
        <div className="navbar text-xl font-bold bg-black text-white fixed top-0 z-40 max-w-[1248px] px-4 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {
                            pages
                        }
                    </ul>
                </div>
                {/* <img src={logo} alt="" /> */}
                <div className="btn-ghost normal-case text-xl p-2 rounded-md text-center">
                    <h1>NS ROYEl</h1>
                    <h2>Event</h2>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {
                        pages
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;