import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <>
            {/* ---top part--- */}
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </section>
            {/* ---contactForm part--- */}
            <section className='py-12'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Contact Us</h2>
                    <div className='w-full'>
                        <div className='border border-black p-5 md:mb-0 mb-6' >
                            <h2 className='md:text-2xl text-xl font-semibold mb-4 text-center' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>SEND ENQUIRY</h2>
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
                                <div className='flex md:flex-row flex-col justify-between items-center gap-4 my-6' >
                                    <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                        <label className='mb-1 relative' htmlFor="email">Email<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                        <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="email" id='email' name='email' placeholder='Your Email' required />
                                    </div>
                                    <div className='flex flex-col items-start w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                                        <label className='mb-1 relative' htmlFor="subject">Subject<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                        <input className='p-3 bg-gray-200 rounded focus:outline outline-red-600 w-full' type="text" id='subject' name='subject' placeholder='Subject' required />
                                    </div>
                                </div>
                                <div className='flex flex-col items-start' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                    <label className='mb-1 relative' htmlFor="message">Message<i className="fa-sharp fa-solid fa-star absolute top-1.5 right-[-8px] text-red-600" style={{ fontSize: '5px' }}></i></label>
                                    <textarea className='p-3 bg-gray-200 focus:outline outline-red-600 w-full' type="text" id='message' name='message' rows='5' placeholder='Your Message' required />
                                </div>
                                <div className='flex justify-center'>
                                    <input className='bg-red-600 text-white py-2 px-3 rounded border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700 cursor-pointer mt-6' type="submit" value='SUBMIT' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full mt-8' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                        <h3 className='md:text-2xl text-xl font-semibold mb-2'>Equator International Pvt. Ltd.</h3>
                        <span className='text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Gongabu, Kathmandu, Nepal</p>
                        </span>
                        <span className='text-gray-700 flex items-center gap-2 my-1'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+977-1-4986469,1-4986470</p>
                        </span>
                        <span className='text-gray-700 flex items-center gap-2'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>equator746@gmail.com</p>
                        </span>
                    </div>
                </div>
            </section>
            {/* ---map part--- */}
            <section className='py-4'>
                <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.2952932376134!2d85.31130357393788!3d27.739036624095895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1692158490685!5m2!1sen!2snp" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default Contact;
