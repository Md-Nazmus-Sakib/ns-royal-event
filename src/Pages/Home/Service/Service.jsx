import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, image, name, price, description } = service;
    return (
        <div>
            <div className={`card bg-base-100 shadow-xl h-96 text-white ${id % 2 === 0 ? 'bg-gradient-to-b from-violet-500 to-fuchsia-500' : 'bg-gradient-to-t from-violet-500 to-fuchsia-500'}`}>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-bold">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/service/${id}`} onClick={() => handelServiceDetail(id)} className="btn btn-secondary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;