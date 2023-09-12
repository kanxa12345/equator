import React from 'react';
import { NavLink } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>WHY CHOOSE US</li>
                    </ul>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Why Choose Us</h2>
                    <div className='w-full py-4'>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                            <div className='flex flex-col gap-7 w-full'>
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                    <img className='h-14' src="/src/assets/images/icons/guarantee.jpg" alt="guarantee" />
                                    <h3 className='sm:text-2xl text-xl font-medium'>Guarantee</h3>
                                    <p className='text-gray-700 sm:text-base text-sm bg-gray-100 p-2'>We stand Guarantee through our excellent Recruitment Team’s knowledge & meticulous process.</p>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                    <img className='h-14' src="/src/assets/images/icons/experience.jpg" alt="experience" />
                                    <h3 className='sm:text-2xl text-xl font-medium'>Experience</h3>
                                    <p className='text-gray-700 sm:text-base text-sm bg-gray-100 p-2'>Our team of industry-experienced consultants manages recruitment projects from Entry in all the verticals by identifying the effective recruiting channels.</p>
                                </div>
                            </div>
                            <div className='w-full my-auto'>
                                <img className='h-96 w-full object-cover' src="/src/assets/images/woman.jpg" alt="image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' />
                            </div>
                            <div className='flex flex-col gap-7 w-full'>
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                    <img className='h-14' src="/src/assets/images/icons/license.jpg" alt="license" />
                                    <h3 className='sm:text-2xl text-xl font-medium'>License</h3>
                                    <p className='text-gray-700 sm:text-base text-sm bg-gray-100 p-2'>Govt. Lic No.: 746/064/065 approved from the Government of Nepal.</p>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                    <img className='h-14' src="/src/assets/images/icons/presence.jpg" alt="presence" />
                                    <h3 className='sm:text-2xl text-xl font-medium'>Presence</h3>
                                    <p className='text-gray-700 sm:text-base text-sm bg-gray-100 p-2'>Have established a leading presence in many of the key Middle East and Brunai markets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs;
