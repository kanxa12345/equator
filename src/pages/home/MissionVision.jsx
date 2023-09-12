import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from './MissionVisionData';

const MissionVision = () => {
    const data = Data;
    return (
        <section className='py-12'>
            <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
                {data.map((dataItem) => (
                    <div key={dataItem.id} className='text-white' data-aos="zoom-in" data-aos-duration="1000" data-aos-once='true'>
                        <NavLink to={`/MissionVision/${dataItem.id}`} className='block p-4 relative'>
                            <img className='absolute w-full h-full top-0 left-0 object-cover' src={`/src/assets/images/mvv/${dataItem.bgUrl}`} alt="mission" />
                            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-70'></div>
                            <div className='flex flex-col items-center relative z-10'>
                                <span className='flex flex-col items-center'>
                                    <img className='w-2/3' src={`/src/assets/images/mvv/${dataItem.iconUrl}`} alt="target" />
                                    <h4 className='sm:text-2xl text-xl my-2 font-medium'>{dataItem.title}</h4>
                                </span>
                                <p className='text-center sm:text-base text-sm'>{dataItem.description.substring(0, 100)}...</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MissionVision;
