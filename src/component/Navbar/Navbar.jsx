import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.displayName)
    const handelLogOut = () => {
        logOut()
            .then(() => { })
    }
    const pages = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/shop'}>Shop</NavLink></li>

        {
            user ? <div title={user?.displayName} className='lg:flex justify-center items-center gap-4'>

                <div className="avatar font-2xl">
                    <div className="w-12 rounded-full tooltip text-white tooltip-bottom" data-tip="hello">
                        <img src={user?.photoURL} />

                    </div>
                </div>
                <h1>{user?.displayName}</h1>
                <li><Link onClick={handelLogOut}>LogOut</Link></li>
            </div> :
                <li><NavLink to={'/login'}>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar text-xl font-bold bg-black text-white fixed top-0 z-40 max-w-[1248px] px-4 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown text-black ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {
                            pages
                        }
                    </ul>
                </div>
                {/* <img src={logo} alt="" /> */}
                <div className="btn-ghost normal-case text-xl p-2 rounded-md text-center">
                    <h1>NS ROYAL</h1>
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