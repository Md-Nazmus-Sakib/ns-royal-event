import React from 'react';

const CardHeader = ({ subHeader, header }) => {
    return (
        <div className='text-white'>
            <div className='md:w-1/2 mx-auto text-center bg-black bg-opacity-50 p-12 rounded-xl'>
                <h4>--- {subHeader} ---</h4>
                <h1 className='text-2xl md:text-5xl font-bold my-8 border-b-4 mx-auto p-2 w-5/6 border-pink-500 uppercase'>{header}</h1>

            </div>
        </div>
    );
};

export default CardHeader;