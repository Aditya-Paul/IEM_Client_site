import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='p-20 text-black bg-gray-200'>
            <div>
                <p className='text-xl pb-4'>TESTIMONIAL</p>
            </div>
            <div>
                <h1 className='w-1/2 text-start text-4xl font-bold'>In Conversation With The IEM
                    Community</h1>
            </div>
            <div className='py-10 flex flex-col md:flex-row items-center'>
                <div className='w-1/4 pb-6 md:pb-0 '>
                    <div className='flex flex-col  items-center justify-center'>
                        <h1 className='text-2xl py-2 flex items-center  text-yellow-500'><span className='px-4'>Students</span> <FaLongArrowAltRight /></h1>
                        <h1 className='text-2xl py-2 flex items-center  '><span className='px-4'>Alumni</span> <FaLongArrowAltRight /></h1>
                        <h1 className='text-2xl py-2 flex items-center  '><span className='px-4'>Parents</span> <FaLongArrowAltRight /></h1>
                        <h1 className='text-2xl py-2 flex items-center  '><span className='px-4'>Faculty</span> <FaLongArrowAltRight /></h1>
                    </div>
                </div>
                <div className='w-3/4 flex flex-col md:flex-row items-center justify-center'>
                    <div >
                        <img className='' src="https://i.ibb.co/Q8VZDHS/Whats-App-Image-2024-01-18-at-9-09-36-PM-1.jpg" alt="student picture" />
                    </div>
                    <div className=''>
                        <p className='text-xl text-gray-600 p-4' >The state of the art indoor and outdoor sports facility provided at IEM is commendable. The understanding of the game and strategizing the strengths of the plyers by the coach is laudable.</p>

                        <h1 className='text-2xl font-bold pl-4 pb-2'>Aditya Paul</h1>
                        <h1 className='text-xl font-bold pl-4'>CSE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;