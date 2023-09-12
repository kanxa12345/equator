import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutCompany = () => {
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>ABOUT US</li>
                    </ul>
                </div>
            </section>
            <section className="py-12">
                <div className="container">
                    <div className="flex lg:flex-row flex-col justify-between lg:gap-4 gap-6">
                        <div className='flex flex-col items-start lg:w-8/12'>
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>About Company</h2>
                            <div className='text-gray-700 sm:text-base text-sm w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                <p className='mb-2'>To begin with,we would like to introduce Equator International Pvt.Ltd asone of the prominent and well-known Manpower Recruiting Agency in Nepal. With honesty and reliablity as the key objectives, this organization,being a service based agency has constantly emphasized on quality services to ensure utmost satisfaction to both its clients as well as to the aspirants seeking overseas employment. That is not all,This organization has left no stone unturned to functionas a bridge between the employer and the employee to ensure smooth relationship between them thus avoiding any sort of misunderstandings.</p>
                                <p>Maintain a smooth relationship with our clients and job seekers is what we belive in.Since we also beloive in understanding, sincerity and reliability we commit hasslein.Since we also belive in understanding,sincerity and reliability we commit hassle free service to our business partners and clients to puhold charming relationship. In this regard,we,the entire team of Equator International Pvt Ltd urge all concerned parties and clients to provide us an opportunity to establish a smooth business relationship to prove our commitment.</p>
                            </div>
                        </div>
                        <div className='lg:w-4/12 flex items-center'>
                            <img className='h-96 w-full object-cover rounded-se-3xl rounded-es-3xl' src="/src/assets/images/about-company.jpg" alt="about-company" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-12'>
                <div className="container">
                    <div className='flex flex-col items-start'>
                        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Our Objective</h2>
                        <div className='text-gray-700 bg-gray-100 p-3' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                            <ul className='sm:text-base text-sm'>
                                <li className='flex items-center gap-2'>
                                    <i className="fa-solid fa-check"></i>
                                    <p>To Highly-skilled, Skilled, Semi-skilled as well as Non-skilled people abroad.</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className="fa-solid fa-check"></i>
                                    <p>To find the right candidate according to the requirement of the employer company</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className="fa-solid fa-check"></i>
                                    <p>To find right job abroad according to capability of jobseekers.</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className="fa-solid fa-check"></i>
                                    <p>To support the national economy by incresing foreign remittance.</p>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <i className="fa-solid fa-check"></i>
                                    <p>To extend good relationship with the recruiting company abroad by providing them manpower as per their recriutment</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany;
