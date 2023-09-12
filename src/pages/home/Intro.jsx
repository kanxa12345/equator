import React from 'react';
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return (
        <section className='py-12'>
            <div className='container flex flex-col items-center'>
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>About Us</h2>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                    <h3 className='md:text-2xl sm:text-xl text-lg font-bold'>Equator International Pvt. Ltd.</h3>
                    <p className='text-gray-700 mb-5 sm:text-base text-sm'>With honesty and reliablity as the key objectives, this organization,being a service based agency.has constantly emphasized on quality services to ensure utmost satisfaction to both its clients as well as to the aspirants seeking overseas employment.That is not all,This organization has left no stone unturned to functionas a bridge between the employer and the employee to ensure smooth relationship between them thus avoiding any sort of misunderstandings.</p>
                    <NavLink to="/AboutCompany" className='py-3 px-4 rounded bg-red-700 bottom-10 right-2 text-white border border-red-700 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700'>Read More <i className="fa fa-chevron-right ms-1"></i></NavLink>
                </div>
            </div>
        </section>
    )
}

export default Intro;
