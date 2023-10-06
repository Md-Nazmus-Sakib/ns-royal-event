import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import headerImg1 from '../../../assets/Images/Header/header1.jpg'
import headerImg2 from '../../../assets/Images/Header/header2.jpg'
import headerImg3 from '../../../assets/Images/Header/header3.jpg'
import headerImg4 from '../../../assets/Images/Header/header4.jpg'
import headerImg5 from '../../../assets/Images/Header/header5.jpg'
import headerImg6 from '../../../assets/Images/Header/header6.jpg'
import './Header.css'


const Header = () => {




    return (
        // <div className='relative '>
        //     <div className='w-full h-[620px] absolute top-0 opacity-40 z-10 bg-black border border-red-600'></div>
        //     <h1>header</h1>
        //     <>
        //         <Swiper
        //             style={{
        //                 '--swiper-navigation-color': 'white',


        //             }}
        //             loop={true}
        //             spaceBetween={10}
        //             navigation={true}
        //             // thumbs={{ swiper: thumbsSwiper }}
        //             modules={[FreeMode, Navigation, Thumbs]}
        //             className="mySwiper2"
        //         >
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg1} />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg2} />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg3} />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg4} />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg5} />
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className='h-[600px] w-full' src={headerImg6} />
        //             </SwiperSlide>
        //         </Swiper>

        //     </>

        // </div>
        <div>
            <div className='relative'>
                <div className="carousel w-full max-h-1/2 border border-red-600">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={headerImg1} className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={headerImg2} className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={headerImg3} className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={headerImg4} className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div className='absolute bg-black opacity-60 top-0 w-full h-[600px] '>
                    </div>
                    <div className='absolute top-0 w-full h-full z-10 text-white flex justify-center items-center'>
                        <div className='md:w-1/2 text-center p-4 fixed top-20 md:static'>
                            <h1 className='text-2xl md:text-5xl font-extrabold my-8'>Hello! We Are an Event <br /> Planning Agency</h1>
                            <p>As the premier event planning company in the area, we know that it's not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                            <button className="btn btn-secondary my-8">Secondary</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="w-12 h-10"><img src={headerImg1} alt="" /></a>
                <a href="#slide2" className="w-12 h-10"><img src={headerImg2} alt="" /></a>
                <a href="#slide3" className="w-12 h-10"><img src={headerImg3} alt="" /></a>
                <a href="#slide4" className="w-12 h-10"><img src={headerImg4} alt="" /></a>
            </div>
        </div>
    );
};

export default Header;