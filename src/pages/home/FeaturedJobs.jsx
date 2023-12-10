import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Data from '../jobSectors/JobSectorData';
import JobItem from '../jobSectors/JobItem';

const FeaturedJobs = () => {
    const jobData = Data;
    const jobFolder = {};
    jobData.forEach((dataItem) => {
        if (!jobFolder[dataItem.title]) {
            jobFolder[dataItem.title] = {
                title: dataItem.title,
                thumbnailImage: dataItem.imageUrl,
                allData: [dataItem],
            };
        } else {
            jobFolder[dataItem.title].allData.push(dataItem);
        }
    });

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <section className='py-12 relative'>
            <img className='absolute inset-0 w-full h-full object-cover' src="/src/assets/images/featurejobs-bg.webp" alt="background" />
            <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
            <div className="container flex flex-col items-center relative z-10 text-red-600 w-full">
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold mb-8 text-white relative after:absolute after:w-[100%] after:h-[5px] after:bg-red-600 after:content-[''] after:bottom-[-8px] after:rounded-sm after:left-0 before:absolute before:bg-white before:content-[''] before:h-[5px] before:w-[5px] before:bottom-[-8px] before:z-10 animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Featured Jobs</h2>
                <div className="w-full">
                    <Slider {...settings}>
                        {Object.values(jobFolder).map((jobData) => (
                            <JobItem key={jobData.title} jobData={jobData} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default FeaturedJobs;
