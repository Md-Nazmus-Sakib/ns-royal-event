import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='h-full overflow-visible'>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;