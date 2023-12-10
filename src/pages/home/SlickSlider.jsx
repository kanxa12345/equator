import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = ({ data }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
    };
    return (
        <div className='container flex flex-col items-center'>
            <blockquote className='relative before:absolute before:content-[open-quote] before:font-custom before:text-yellow-400 before:text-[180px] before:left-[-50px] before:top-[-60px] py-10'>
            </blockquote>
            <div className='md:w-2/3 w-full'>
                <Slider {...settings}>
                    {data.map((dataItem) => (
                        <div key={dataItem.id} className='custom-flex flex-col items-center'>
                            <h3 className='sm:text-2xl text-xl font-bold'>{dataItem.name}</h3>
                            <i className='my-1 sm:text-base text-xs'>Profession</i>
                            <p className='text-center sm:text-lg text-sm'>{dataItem.message}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SlickSlider;
