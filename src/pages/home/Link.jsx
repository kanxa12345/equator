import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = () => {
    return (
        <section>
            <div className="container flex flex-wrap">
                <div className='md:w-1/3 w-full h-full'>
                    <NavLink className='flex justify-between items-center gap-4 bg-primary text-white py-10 px-5' to="/OrganizationChart">
                        <div className="w-1/3 relative before:absolute before:content-[''] before:w-[80px] before:h-[80px] before:border-2 before:border-dotted before:border-white before:z-10 before:top-[-20px] before:left-[-10px] before:rounded-[60px] after:absolute after:content-[''] after:w-[79px] after:h-[79px] after:top-[-18px] after:left-[-9px] after:bg-primary after:rounded-[60px] after:z-20">
                            <i className="fa-regular fa-building relative z-[100] text-[60px] left-2"></i>
                        </div>
                        <div className='w-2/3'>
                            <p className='lg:text-3xl md:text-2xl text-xl font-semibold'>Organization Chart</p>
                        </div>
                    </NavLink>
                </div>
                <div className='md:w-1/3 w-full h-full'>
                    <NavLink className='flex justify-center items-center gap-4 bg-gray-200 text-black py-10 px-5 h-full' to="/LegalDocument">
                        <div className="w-1/3 relative before:absolute before:content-[''] before:w-[80px] before:h-[80px] before:border-2 before:border-dotted before:border-black before:z-10 before:top-[-20px] before:left-[-10px] before:rounded-[60px] after:absolute after:content-[''] after:w-[79px] after:h-[79px] after:top-[-18px] after:left-[-9px] after:bg-gray-200 after:rounded-[60px] after:z-20">
                            <i className="fa-regular fa-file relative z-[100] text-[60px] left-2"></i>
                        </div>
                        <div className='w-2/3'>
                            <p className='lg:text-3xl md:text-2xl text-xl font-semibold'>Legal Documents</p>
                        </div>
                    </NavLink>
                </div>
                <div className='md:w-1/3 w-full h-full'>
                    <NavLink className='flex justify-center items-center gap-4 bg-primary text-white 2xl:py-10 lg:py-[46px] py-[42px] px-5 h-full' to="/OurTeam">
                        <div className="w-1/3 relative before:absolute before:content-[''] before:w-[80px] before:h-[80px] before:border-2 before:border-dotted before:border-white before:z-10 before:top-[-20px] before:left-[-10px] before:rounded-[60px] after:absolute after:content-[''] after:w-[79px] after:h-[79px] after:top-[-18px] after:left-[-9px] after:bg-primary after:rounded-[60px] after:z-20">
                            <i className="fa-solid fa-people-group relative z-[100] text-[60px]"></i>
                        </div>
                        <div className='w-2/3'>
                            <p className='lg:text-3xl md:text-2xl text-xl font-semibold'>Our Team</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Link;
