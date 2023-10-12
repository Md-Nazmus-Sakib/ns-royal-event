import React from 'react';
import celebrateImg from '../../../assets/Images/WhyBest/Whybest1.jpeg'
import ceremonyImg from '../../../assets/Images/WhyBest/ceremony.jpeg'
import decorationImg from '../../../assets/Images/WhyBest/decoration.jpg'
import straightImg from '../../../assets/Images/Shop/straight.png'

const WhyBest = () => {
    return (
        <div className='my-12  overflow-hidden'>
            <div className='sm:w-1/2 mx-auto text-center'>
                <h4>-- Why We Are Best --</h4>
                <h1 className='text-2xl md:text-5xl font-bold my-8 mx-auto p-2 w-5/6 '>TO SAVE YOUR VALUABLE TIME WITH US</h1>
                <img src={straightImg} alt="" />
                <p>With the largest network of local wedding vendors, WeddingWire offers the most comprehensive wedding site out there. You will be able to find the best vendor for your budget and plan your wedding exactly the way you envisioned it. We make it simple to get the pricing, availability, and answers you need from wedding venues and wedding vendors across every town.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-12'>
                {/* data-aos="fade-right" data-aos-offset="300" data-aos-duration="3000" */}
                <div data-aos="zoom-in" data-aos-duration="3000" className=' text-justify'>
                    <div className="avatar flex justify-center">
                        <div className="w-64 mx-auto rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={celebrateImg} />
                        </div>

                    </div>
                    <div>
                        <h2 className='text-3xl text-bold my-6'>The Timeless Celebration of Love: The Wedding Concept</h2>
                        <p>A wedding is more than just an event; it's a celebration of love, commitment, and the beginning of a beautiful journey together. It's a day filled with joy, laughter, and heartfelt emotions as two souls unite in matrimony.</p>
                    </div>
                </div>

                {/* data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-delay='300' data-aos-duration="1500" */}
                <div data-aos="zoom-in-up" data-aos-duration="3000" className=' text-justify'>
                    <div className="avatar flex justify-center">
                        <div className="w-64 mx-auto rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={ceremonyImg} />
                        </div>

                    </div>
                    <h2 className='text-3xl text-bold my-6'>A Celebration of Love: The Wedding Ceremony</h2>
                    <p>The wedding ceremony is the heart and soul of a wedding day, a momentous occasion that brings together two people in a bond of love, commitment, and shared dreams. It is a sacred and joyous celebration, a testament to the love story that has led two hearts to unite as one.</p>
                </div>
                {/* data-aos="zoom-in-down" data-aos-duration="3000"  */}
                {/*  */}
                <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000" className=' text-justify'>

                    <div className="avatar flex justify-center">
                        <div className="w-64 mx-auto rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={decorationImg} />
                        </div>

                    </div>
                    <h2 className='text-3xl text-bold my-6'>Elegance in Every Detail: Wedding Decorations</h2>
                    <p>At our wedding, every decoration is a brushstroke on the canvas of our love story, adding color, beauty, and personality to our special day. Our commitment to each other is reflected in the thoughtful and exquisite decorations that adorn our celebration.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyBest;