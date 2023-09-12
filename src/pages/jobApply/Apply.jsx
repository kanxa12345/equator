import React from 'react';
import { NavLink } from 'react-router-dom';
import countryList from 'react-select-country-list';

const Apply = () => {
    const countries = countryList().getData();
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li>APPLY NOW</li>
                    </ul>
                </div>
            </section>
            <section className="py-12">
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Apply Now</h2>
                    <div className='w-full shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] p-6 rounded-lg'>
                        <form>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="name">Name<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="text" id='name' name='name' placeholder='Your Name' required />
                                </div>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="mobile">Mobile No.<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="tel" id='mobile' name='mobile' placeholder='Your Mobile No.' required />
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4 my-6'>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="permanent-address">Permanent Address<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="text" id='permanent-address' name='permanent' placeholder='Permanent Address' required />
                                </div>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="current-address">Current Address<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="text" id='current-address' name='current-address' placeholder='Current Address' required />
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col justify-between items-center gap-4 my-6'>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="email">Email<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="email" id='email' name='email' placeholder='Your Email' required />
                                </div>
                                <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1' htmlFor="country">Select Country</label>
                                    <select className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' id='country' name='country'>
                                        {countries.map((country) => (
                                            <option key={country.value} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col items-start' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                <label className='mb-1' htmlFor="message">Message</label>
                                <textarea className='p-3 bg-gray-200 focus:outline outline-red-600 w-full' type="text" id='message' name='message' rows='5' placeholder='Your Message' />
                            </div>
                            <div className='flex md:gap-0 gap-4 md:flex-row flex-col justify-between flex-wrap my-6'>
                                <div className='flex flex-col items-start md:w-1/3 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label htmlFor="cv" className='mb-1'>Your CV</label>
                                    <input type="file" id='cv' name='cv' className='text-gray-700 w-full' />
                                </div>
                                <div className='flex flex-col items-start md:w-1/3 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label htmlFor="photo" className='mb-1'>Your passport sized photo</label>
                                    <input type="file" id='photo' name='photo' className='text-gray-700 w-full' />
                                </div>
                                <div className='flex flex-col items-start md:w-1/3 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label htmlFor="passport" className='mb-1'>Your scaned passport</label>
                                    <input type="file" id='passport' name='passport' className='text-gray-700 w-full' />
                                </div>
                                <div className='flex flex-col items-start md:w-1/3 w-full md:mt-4' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                    <label htmlFor="certificate" className='mb-1'>Your academic certificate</label>
                                    <input type="file" id='certificate' name='certificate' className='text-gray-700 w-full' />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <input className='bg-red-600 text-white py-2 px-3 rounded border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700 cursor-pointer mt-6' type="submit" value='SUBMIT' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Apply;
