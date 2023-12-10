import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
    const images = ['alstom.png', 'kepco.png', 'manco.png', 'ottawa.png', 'punj-lloyd.jpg', 'technip.png']
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 546,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    return (
        <section className='py-10'>
            <div className='container flex flex-col items-center'>
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-center mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Our Clients</h2>
                <div className='w-full'>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div className="flex justify-center items-center h-full" key={index}>
                                <img className='sm:h-[50px] h-[40px] w-1/2' src={`/src/assets/images/clients-images/${image}`} alt="clients" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Clients;
