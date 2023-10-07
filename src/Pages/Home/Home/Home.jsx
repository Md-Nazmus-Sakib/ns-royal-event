import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import { useLoaderData } from 'react-router-dom';
import Services from '../Service/Services';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Services services={services}></Services>
            <About></About>
        </div>
    );
};

export default Home;