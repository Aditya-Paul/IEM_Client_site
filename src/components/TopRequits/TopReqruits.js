'use client'
import React, { useEffect, useState } from 'react';

const TopReqruits = () => {
    const array = [{ name: 'PWC', keyWord: 'https://i.ibb.co/yWFBfv1/pwc.png' }, { name: 'IBM', keyWord: 'https://i.ibb.co/dfkSBkZ/ibm.png' }, { name: 'Wipro', keyWord: 'https://i.ibb.co/16xsY4G/wipro.jpg' }, { name: 'Tcs', keyWord: 'https://i.ibb.co/dgQ2bqS/tcs.jpg' }];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className=''>
            <div className='flex items-center justify-center p-6'>
                <h1 className='text-4xl text-black font-semibold '>Our Top Recruiters</h1>
            </div>

            <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24 my-10">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                            </svg>
                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                            </svg>
                        </button>
                    </div>
                    {/* slider container */}
                    <div
                        className="ease-linear duration-300 flex"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                        {/* sliders */}
                        {array.map((each, idx) => (
                            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                                <div className="h-full p-8  shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                    <img alt="testimonial" src={each.keyWord}className="w-full h-88 md:h-96 rounded-lg" />

                                    <a className="inline-flex items-center">

                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-semibold text-gray-900 text-2xl">{each.name}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopReqruits;