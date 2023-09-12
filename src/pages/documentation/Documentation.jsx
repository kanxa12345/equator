import React from 'react';
import { NavLink } from 'react-router-dom';

const Documentation = () => {
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li>DOCUMENTATION</li>
                    </ul>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Documentation</h2>
                    <div className='w-full flex flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                        <h3 className='md:text-xl text-lg font-semibold mb-2'>For Qatar, Kuwait, Bahrain, Oman, Lebanon and UAE</h3>
                        <ul className='text-gray-700 bg-gray-100 p-2 md:text-base text-sm flex flex-col gap-1'>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Demand Letter</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Power of Attorney</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Agency Agreement</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Guarantee Letter</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Employment Contract</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Chamber of Commerce / Nepal Embassy (in some case)</li>
                        </ul>
                    </div>
                    <div className='w-full flex flex-col my-8' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                        <h3 className='md:text-xl text-lg font-semibold mb-2'>For Malaysia</h3>
                        <ul className='text-gray-700 bg-gray-100 p-2 md:text-base text-sm flex flex-col gap-1'>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Demand Letter</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Power of Attorney</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Agency Agreement</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>KDN Approval (From Ministry of Labor)</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Employment Contract</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Affidavit</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Letter written by company to Malaysian Embassy in Nepal</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Translation Letter (From Ministry of Labor or Ministry of Home)</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Notary Public or Attestation of Nepal Embassy KL</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Profile of Company</li>
                        </ul>
                    </div>
                    <div className='w-full flex flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                        <h3 className='md:text-xl text-lg font-semibold mb-2'>For Saudi Arabia</h3>
                        <ul className='text-gray-700 bg-gray-100 p-2 md:text-base text-sm flex flex-col gap-1'>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Demand Letter</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Power of Attorney</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Agency Agreement</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Guarantee Letter</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Employment Contract</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Visa slip</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Consulate Authorization</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>Commercial Registration</li>
                            <li className='flex items-center'><i className="fa-solid fa-check me-1"></i>COC/MOFA/Nepal - Ambassy (in some case)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Documentation;
