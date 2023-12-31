import React from 'react';
import { NavLink } from 'react-router-dom';

const OrganizationChart = () => {
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>ORGANIZATION CHART</li>
                    </ul>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate"  data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Organization Chart</h2>
                    <div className='shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] w-full p-4'  data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                        <img className='w-full' src="/src/assets/images/organization-chart.png" alt="organization chart" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrganizationChart;
