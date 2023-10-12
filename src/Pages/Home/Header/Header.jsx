
import { Link } from 'react-router-dom'
import headerImg1 from '../../../assets/Images/Header/header1.jpg'
import headerImg2 from '../../../assets/Images/Header/header2.jpg'
import headerImg3 from '../../../assets/Images/Header/header3.jpg'
import headerImg4 from '../../../assets/Images/Header/header4.jpg'
import headerImg5 from '../../../assets/Images/Header/header5.jpg'
import headerImg6 from '../../../assets/Images/Header/header6.jpg'



const Header = () => {

    // function


    // function end 
    return (
        <div>
            <div className='relative my-12'>
                <div className="carousel w-full h-[700px] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={headerImg1} className="w-full h-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={headerImg2} className="w-full h-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={headerImg3} className="w-full h-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={headerImg4} className="w-full h-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-20">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div className='absolute bg-black opacity-50 top-0 w-full h-[700px] '>
                    </div>
                    <div className='absolute top-0 w-full h-full z-10 text-white flex justify-center items-center'>
                        <div className='md:w-1/2 text-center p-4 sticky top-20 md:static'>
                            <h1 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1500"

                                className='text-2xl md:text-5xl font-extrabold my-8'>Hello! We Are an Event <br /> Planning Agency</h1>
                            <p data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="3000">As the premier event planning company in the area, we know that it's not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                            <Link to={'/about'}> <button data-aos="zoom-in-up" data-aos-duration="3000" className="btn btn-secondary my-8">Details</button></Link>
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