import React from 'react';
import Service from './Service';
import straight from '../../../assets/Images/Shop/straight.png'

const Services = ({ services }) => {
    return (
        <div className='my-12'>
            <div className='w-1/2 mx-auto text-center'>
                <h4>WE PROVIDE AWESOME DEALS</h4>
                <h1 className='text-5xl font-bold my-8 mx-auto p-2 w-5/6 '>EVENT <span className='text-secondary'>PACKAGES</span></h1>
                <p>We believe that love is a celebration to be cherished, and we are honored to create your dream wedding</p>
                <img src={straight} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;