import React from 'react';
import aboutbgImg from '../../../assets/Images/About/aboutbg.jpg'
import circleImg from '../../../assets/Images/About/images.jpg'

const About = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${aboutbgImg})`, backgroundSize: "cover" }} className=' my-12 w-full min-h-screen md:flex items-center'>


            <div className='bg-red-300 p-4 m-8 lg:m-32 lg:p-24 bg-opacity-40 text-white'>
                <img className='rounded-full w-[300px] h-[300px] md:float-left md:mr-6' style={{ shapeOutside: 'circle()' }} src={circleImg} alt="" />

                <div>
                    <h1 className='text-3xl font-extrabold my-4'>We Plan & Design Weddings That Capture the Imagination</h1>
                    <p className='md:text-xl'>Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues.Our expert event planner works closely with you, understands your unique needs, creates a special package customised for you and delivers a one of a kind unique experience which you will cherish for your rest of the life.</p>

                </div>

            </div>
        </div>
    )
};

export default About;