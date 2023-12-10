import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import JobSectorData from './JobSectorData';

const JobDescription = () => {
    const { title } = useParams();
    const data = JobSectorData.filter((job) => job.title === title);
    console.log(data)

    return (
        <>
            <section className='sm:py-24 py-16 relative'>
                <img className='absolute w-full h-full top-0 left-0 object-cover' src="/src/assets/images/background.webp" alt="background" />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='container flex md:flex-row flex-col justify-between items-center relative text-white z-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center'>Equator International</h1>
                    <ul className='flex items-center gap-3 sm:text-xl text-base md:mt-16 mt-4'>
                        <li className="relative hover:text-primary after:absolute after:h-[85%] after:w-[1px] after:bg-white after:right-0 after:bottom-0"><NavLink className='px-3' to="/">HOME</NavLink></li>
                        <li className='flex items-center gap-2'>JOB DESCRIPTION</li>
                    </ul>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>{data.length > 0 ? data[0].title : ''}</h2>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                        {data.map((jobItem, index) => (
                            <div key={index} className='shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] px-4 py-6 rounded-lg' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                                <div className='flex sm:flex-row flex-col gap-4'>
                                    <div className='sm:w-1/2 w-full'>
                                        <img className='w-full lg:h-28 md:h-44 lg-28 object-cover' src={jobItem.imageUrl} alt={jobItem.title} />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <h3 className='text-xl font-semibold mb-3'><i className="fa-solid fa-location-dot me-1"></i>{jobItem.country}</h3>
                                        <div className='font-medium sm:text-base text-sm'>
                                            <p>Company Name: <b className=' text-red-600'>{jobItem.companyName}</b></p>
                                            <p className=' mt-1'>Required No.: <b className='text-red-600'>{jobItem.requiredNo}</b></p>
                                            <p className='my-1'>Minimum Qualification: <b className='text-red-600'>{jobItem.minQualification}</b></p>
                                            <p>Salary: <b className='text-red-600'>{jobItem.salary}</b></p>
                                        </div>
                                        <NavLink to='/Apply' className='block w-auto text-white py-2 px-3 mt-5 rounded bg-red-600 border border-red-600 transition-all duration-200 ease-linear hover:bg-white hover:text-gray-700'>Apply Now</NavLink>
                                    </div>
                                </div>
                                <div className='border-t mt-5'>
                                    <h3 className='text-xl font-medium my-1'>Description</h3>
                                    <p className='text-gray-700 sm:text-base text-sm'>{jobItem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobDescription;
