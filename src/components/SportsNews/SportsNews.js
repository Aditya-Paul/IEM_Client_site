'use client'
import React, { useState } from 'react';

const EventsNews = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/r311hhD/marathon.webp", title: "IEM-UEM Kolkata Marathon 2024", des: "With pleasure we would like to inform all that the IEM- UEM KOLKATA MARATHON will be held on 18th February 2024 from the IEM Management House campus.All are requested to join with us in IEM-UEM kolkata Marathon." }, { img: "https://i.ibb.co/rtMDWBN/DE.webp", title: "Seminar on “Career Opportunities in DAE”", des: "Department of Atomic Energy(DAE) invites all to join the BARC Training School For Academic Year 2024-2025.DAE in association with IQAC of IEM has organised the event on 18th JAnuary 2024 from 4.00pm in gurukul campus of IEM." }, { img: "https://i.ibb.co/WH74tgF/Fest.webp", title: "IEMPACT:IEM Annual Cultural Fest", des: "IEM Annual cultural fest will organise on 20th & 21st January 2024." }, { img: "https://i.ibb.co/HzKz2n4/Entre.webp", title: "Entrepreneurship Awareness Programme", des: "Entrepreneurship Awareness Programme by MSME, Govt. of India in association with the Institute of Engineering & Management, Kolkata on 17th November. All are invited to join this program." }, { img: "https://i.ibb.co/sbBMMMm/Inno.webp", title: "Annual Techno-Management Festival of IEM – Innovacion", des: "Annual Techno-Management Festival of IEM – Innovacion : Empowered by Innovation is going to be held on 11th and 12th March 2023 at IEM Management House. There are events on Robotics , innovative model exhibitions and competitions for both school and college students , Technical poster competition, Math talent hunt , quiz , stock market challenge, Coding competitions, Hackathons , Business plan competition , Olympiads , Photography, and many more events." },];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className='p-12'>
            <div className='flex items-center justify-center pb-6'>
                <h1 className='text-4xl text-black font-semibold '>Upcoming Events</h1>
            </div>

            <div className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"

                style={{ backgroundImage: `url(https://i.ibb.co/c21hDvt/building.webp)` }}>
                {/* arrow */}
                <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                </div>
                {/* text container here */}
                <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                    <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
                {/* slider container */}
                <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                    <div className="ease-linear duration-300 flex gap-4 items-center"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <img key={inx} src={slide.img}
                                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                    } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                                alt={slide.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsNews;