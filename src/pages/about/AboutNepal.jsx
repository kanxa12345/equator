import React from 'react';
import { NavLink } from 'react-router-dom';
import NepalImages from './NepalImages';
import ImageModal from '../gallery/ImageModal';

const AboutNepal = () => {
    const images = NepalImages;
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>ABOUT NEPAL</li>
                    </ul>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex flex-col items-center'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>About Nepal</h2>
                        <div className='text-gray-700 sm:text-base text-sm w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                            <p><b className='text-black sm:text-xl text-lg'>Nepal</b>, nestled in South Asia between the Himalayas and the Gangetic plains, is a captivating land of diverse geography and rich cultural heritage. Its breathtaking landscapes range from the soaring peaks of the Himalayas, including Mount Everest, to the fertile Terai plains in the south.</p>

                            <p className='py-1'>The capital city, Kathmandu, is a vibrant hub of ancient temples, palaces, and traditional architecture. UNESCO World Heritage Sites like Durbar Square, Pashupatinath Temple, Swayambhunath Stupa, and Boudhanath Stupa showcase the country's historical and religious significance.</p>

                            <p>Nepal is renowned as a trekker's paradise, with famous routes like the Annapurna Circuit and Everest Base Camp attracting adventurers from around the world. The country's national parks, such as Chitwan and Sagarmatha, offer opportunities to witness diverse wildlife, including tigers, rhinoceros, elephants, and rare bird species.</p>

                            <p className='py-1'>Despite its natural and cultural riches, Nepal faces challenges such as political transitions, earthquakes, and economic development. However, the resilience and determination of the Nepalese people shine through, making Nepal an enchanting destination that offers not only stunning landscapes and historical wonders but also a deep sense of spirituality and warm hospitality to all who visit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-12'>
                <div className='container flex flex-col items-center'>
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Images</h2>
                    <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                        {images.map((image, index) => (
                            <ImageModal key={image.id} imageUrl={image.imageUrl} images={images} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutNepal;
