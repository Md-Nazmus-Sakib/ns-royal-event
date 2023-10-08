import React from 'react';
import shopHeader from '../../../assets/Images/Shop/shopHeader.jpg'
const ShopHeader = () => {
    return (
        <div className='mt-24'>
            <div className='md:w-1/2 mx-auto text-center'>
                <h4>-- Recent Product --</h4>
                <h1 className='text-2xl md:text-5xl font-bold my-8 border-b-4 mx-auto p-2 w-5/6 border-pink-500'>WHAT NEWS DO WE HAVE TODAY<span className='text-secondary'>LATEST PRODUCT</span></h1>
                <p>We believe that love is a celebration to be cherished, and we are honored to create your dream wedding</p>
            </div>
            <div className='bg-rose-200 md:flex mt-12'>

                <div className='flex justify-center items-center h-screen'>
                    <h1 style={{ textShadow: ' 4px 4px 8px black' }} className='text-2xl md:text-5xl font-extrabold pl-4 lg:pl-24 font-dancing'>LOVE MEMORIES! OUR TEAM OF PROFESSIONAL PHOTOGRAPHERS IS HERE TO HELP YOU.</h1>
                </div>


                <img style={{ clipPath: "polygon(0 0, 100% 0, 80% 53%, 99% 100%, 0% 100%, 20% 53%)" }} className='md:w-1/2' src={shopHeader} alt="" />
            </div>
        </div>
    );
};

export default ShopHeader;