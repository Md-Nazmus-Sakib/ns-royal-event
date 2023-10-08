import React from 'react';
import imgBg from '../../../assets/Images/Header/DSC00870-2.jpg'

const AboutHeader = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${imgBg})`, backgroundSize: "cover" }} className='h-screen text-white  flex justify-center items-center bg-center'>
            <div className='md:w-1/2 text-center'>
                <h1 style={{ textShadow: '5px 5px 5px  pink' }} className='text-3xl sm:text-7xl font-dancing font-extrabold my-12'>CELEBRATING LOVE</h1>
                <p>Your wedding is one of the biggest events of your journey as a couple, so naturally, we understand that you want to have confidence in the people you choose to work with.</p>
            </div>
        </div>
    );
};

export default AboutHeader;