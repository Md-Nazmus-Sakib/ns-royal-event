
import Header from '../Header/Header';
import About from '../About/About';
import { useLoaderData } from 'react-router-dom';
import Services from '../Service/Services';
import WhyBest from '../WhyBest/WhyBest';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refreshHard()

    }, []);

    const services = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Services services={services}></Services>
            <About></About>
            <WhyBest></WhyBest>

        </div>
    );
};

export default Home;