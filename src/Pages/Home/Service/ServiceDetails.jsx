import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import aboutbgImg from '../../../assets/Images/About/aboutbg.jpg'

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();

    const service = services.find(data => data.id === parseInt(id))

    const { image, name, price, description, details } = service;
    // console.log(service)
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${image})`, backgroundSize: "cover" }} className='py-24 bg-opacity-60'>
            <div className="card glass mt-36 md:w-2/3 mx-auto border border-red-600">
                <figure className='m-4'><img className='rounded-2xl w-full' src={image} alt="wedding" /></figure>
                <div className="card-body items-center text-justify md:mx-18 text-white">
                    <h2 className="card-title text-2xl md:text-5xl text-secondary border-b-8 pb-8 border-pink-600 font-semibold" style={{ textShadow: ' 4px 4px 8px black' }}>{name}
                        <div className="badge p-4 badge-secondary">$ {price}</div>
                    </h2>

                    <p className='text-xl md:text-3xl mt-10'>{description}</p>
                    <p className='text-xl md:text-2xl my-10'>{details}</p>
                    <div className="card-actions justify-end">
                        <Link to={'/'}> <button className="btn btn-secondary">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;