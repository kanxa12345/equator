import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerData from './BannerData';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    const images = BannerData;
    const options = {
        items: 3,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
        }
    };
    return (
        <>
            <section className='relative lg:py-[204px] md:py-[180px] sm:py-[146px] py-[141px]'>
                <div className='absolute w-full h-full top-0 left-0'>
                    <OwlCarousel className="owl-theme h-full" {...options}>
                        {images.map((imageItem, index) => (
                            <div className="item relative" key={index}>
                                <img className='w-full h-full' src={`/src/assets/images/banner-images/${imageItem.imageUrl}`} alt={imageItem.title} />
                                <div className='absolute inset-0 flex justify-center items-center h-[50%]'>
                                    <h3 className='md:text-2xl sm:text-xl text-lg font-bold'>{imageItem.title}</h3>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                <div className="bg-gradient-to-t from-black to-transparent opacity-60 absolute w-full z-10 h-full top-0 left-0"></div>
                <div className="container relative z-20 flex flex-col items-center justify-center text-center">
                    <h1 className='text-white font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-2'>DISCOVER YOUR GLOBAL POTENTIAL</h1>
                    <h2 className='text-white font-semibold md:text-3xl sm:text-xl text-lg'>EMBRACE THE WORLD WITH US</h2>
                    <NavLink to="/Apply" className='block w-auto text-white py-2 px-3 mt-5 rounded bg-red-600 border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700'>Apply Now</NavLink>
                </div>
            </section>
        </>
    )
}

export default Banner;
