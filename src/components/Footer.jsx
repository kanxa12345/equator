import React from 'react';
import logo from '/src/assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-100'>
            <div className="container py-4">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 md:gap-10 gap-8">
                    <div className='flex flex-col item-start'>
                        <img className='lg:w-10/12 md:w-2/3 sm:w-full w-2/3' src={logo} alt="logo" />
                        <div className='my-7'>
                            <a href="#" className='bg-red-600 text-white py-2 px-3 rounded border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700'>Download Brochure</a>
                        </div>
                        <div className='xl:w-1/2 lg:w-2/3 md:w-6/12 sm:w-8/12 w-1/2 flex justify-between items-center'>
                            <span className='h-[30px] w-[30px] flex justify-center items-center rounded-full border border-red-600 hover:bg-red-600 hover:text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear'>
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            </span>
                            <span className='h-[30px] w-[30px] flex justify-center items-center rounded-full border border-red-600 hover:bg-red-600 hover:text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear'>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </span>
                            <span className='h-[30px] w-[30px] flex justify-center items-center rounded-full border border-red-600 hover:bg-red-600 hover:text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear'>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </span>
                            <span className='h-[30px] w-[30px] flex justify-center items-center rounded-full border border-red-600 hover:bg-red-600 hover:text-white hover:h-[35px] hover:w-[35px] transition-all duration-100 ease-linear'>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h3 className="sm:text-2xl text-xl font-semibold mb-6 relative after:absolute after:w-[100%] after:h-[4px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[4px] before:w-[4px] before:bottom-[-8px] before:z-10 animate">Contact</h3>
                        <div className='text-gray-700 flex flex-col sm:text-base text-sm'>
                            <span className='flex items-center gap-1'>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Gongabu, Kathmandu, Nepal</p>
                            </span>
                            <span className='flex items-center gap-1 my-2'>
                                <i className="fa-solid fa-phone"></i>
                                <p>+977-1-4986469,1-4986470</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <i className="fa-solid fa-envelope"></i>
                                <p>equator746@gmail.com</p>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h3 className="sm:text-2xl text-xl font-semibold mb-6 relative after:absolute after:w-[100%] after:h-[4px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[4px] before:w-[4px] before:bottom-[-8px] before:z-10 animate">Quick Links</h3>
                        <div className='flex flex-col gap-1 text-gray-700 w-full sm:text-base text-sm'>
                            <NavLink to="/AboutCompany" className="flex items-center gap-2 hover:ps-3 transition-all duration-300 ease-linear"><i className="fa-solid fa-chevron-right text-sm"></i>About</NavLink>
                            <NavLink to="/JobSector" className="flex items-center gap-2 hover:ps-3 transition-all duration-300 ease-linear"><i className="fa-solid fa-chevron-right text-sm"></i>Job Sectors</NavLink>
                            <NavLink to="/Documentation" className="flex items-center gap-2 hover:ps-3 transition-all duration-300 ease-linear"><i className="fa-solid fa-chevron-right text-sm"></i>Documentation</NavLink>
                            <NavLink to="/Gallery" className="flex items-center gap-2 hover:ps-3 transition-all duration-300 ease-linear"><i className="fa-solid fa-chevron-right text-sm"></i>Gallery</NavLink>
                            <NavLink to="/Contact" className="flex items-center gap-2 hover:ps-3 transition-all duration-300 ease-linear"><i className="fa-solid fa-chevron-right text-sm"></i>Contact</NavLink>
                        </div>

                    </div>
                    <div className='flex flex-col items-start'>
                        <h3 className="sm:text-2xl text-xl font-semibold mb-4 relative after:absolute after:w-[100%] after:h-[4px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[4px] before:w-[4px] before:bottom-[-8px] before:z-10 animate">Map</h3>
                        <div className='w-full'>
                            <iframe className='border-2 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.295293237613!2d85.31130357393788!3d27.739036624095906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192769445433%3A0x9b19ae864def10a7!2sEquator%20International%20P.%20Ltd.!5e0!3m2!1sen!2snp!4v1691994520509!5m2!1sen!2snp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-3">
                <div className="container text-white sm:text-base text-xs">
                    <p>&copy; All rights reserved. Equator International Pvt. Ltd.</p>
                    <p>Powered by <a href="https://radiantnepal.com/" target='_blank' rel='noreferrer' className='underline font-medium'>Radiant Infotecth Nepal</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
