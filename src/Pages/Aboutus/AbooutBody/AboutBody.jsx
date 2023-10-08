import React from 'react';
import aboutusimg from '../../../assets/Images/About/about.png'

const AboutBody = () => {
    return (
        <div className='text-center bg-rose-100 p-2 sm:p-12 relative'>
            <div><img className='hidden absolute top-1/3 sm:block' src={aboutusimg} alt="" /></div>
            <div className='sm:w-1/2 mx-auto'>
                <h1 className='text-3xl sm:text-5xl my-12'>THE NS ROYAL EXPERIENCE</h1>
                <p>THE NS ROYAL Weddings (formerly Your Perfect Bridesmaid) is a team of wedding planners serving Oregon. Designing a wedding day that is stunning, personal, and organized is our highest priority. You and your family deserve to be fully present in every moment.</p>
                <p className='my-12'>Working with NS ROYAL  for your wedding planning process will ensure you have a planning partner from day one. We are your cheerleaders, your extra set of eyes, your educator, your logistics-expert, problem solver, and guiding light.</p>
                <p>As a  NS ROYAL client, you will receive expert guidance, tools, and resources as well as a customized planning portal to simplify this journey. Your will never have to wonder what to do or when to do it - you will always have the information needed to feel confident in the decisions you make.</p>
            </div>
        </div>
    );
};

export default AboutBody;