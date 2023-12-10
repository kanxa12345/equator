import React from 'react';
import { NavLink } from 'react-router-dom';

const MdMessage = () => {
    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>MESSAGE FROM MD</li>
                    </ul>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex flex-col items-center'>
                        <div>
                            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Message From MD</h2>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='lg:w-1/2 md:w-9/12 sm:w-9/12 w-11/12 flex gap-4 items-center'>
                                <img className='h-50 w-[50%] object-cover' src="/src/assets/images/md.jpg" alt="md-image" data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true' />
                                <span className='block mt-4' data-aos="fade-left" data-aos-duration="1000" data-aos-once='true'>
                                    <b className='text-black md:text-2xl text-xl'>Harish Kunwar</b>
                                    <p className='text-gray-700 sm:text-base text-sm'>Mangaging Director</p>
                                </span>
                            </div>
                        </div>
                        <div className='text-gray-700 mt-5 bg-gray-100 p-4 sm:text-base text-sm' data-aos="fade-right" data-aos-duration="1000" data-aos-once='true'>
                            <p>Established to serve, this organization has played a vital role in supplying hard working, sincere and honest manpower to various companies abroad. As a Managing Director of this organization, I assure all concerned, including my business partners, that I will fully utilize my years of experience in this sector to ensure smooth relationship and better service.</p>
                            <p className='my-2'>Here at this point, I would also wish to offer my cordial greetings to all our esteemed clients abroad as well as in Nepal.</p>
                            <p>Supplying manpower from one country to another is a service in itself where everybody becomes a winner. An ideal blend of commitment, honesty and hard work leads to a win situation and this, I feel, is success.</p>
                            <p className='my-2'>Lastly, I once again express my gratitude and appreciation to all my partner and clients for their cooperation.</p>
                            <p>Thanks,</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MdMessage;
