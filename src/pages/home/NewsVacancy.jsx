import React from 'react';
import Data from '../newspaper-vacancy/NewsVacancyData';
import { NavLink } from 'react-router-dom';
import NewspaperModal from '../newspaper-vacancy/NewspaperModal';
const NewsVacancy = () => {
    const images = Data.slice(0, 3)
    const image = images[0]
    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Newspaper Vacancy</h2>
                <div className='md:grid md:grid-cols-3 gap-5 hidden'>
                    {images.map((image, index) => (
                        <NewspaperModal key={image.id} imageUrl={image.imageUrl} images={images} index={index} />
                    ))}
                </div>
                <div className='md:hidden block'>
                    <NewspaperModal key={image.id} imageUrl={image.imageUrl} images={images} index={image.id - 1} />
                </div>
                <NavLink to="/NewspaperVacancy" className='block w-auto text-white py-2 px-3 mt-5 rounded bg-red-600 border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700'>View All</NavLink>
            </div>
        </section>
    )
}

export default NewsVacancy;
