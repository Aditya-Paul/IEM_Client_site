'use client'
import React, { useEffect } from 'react';
import { MdOutlineMenuBook,MdBorderColor,MdDeliveryDining ,MdComputer  } from "react-icons/md";
import { FaFileUpload,FaUserGraduate  } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import 'aos/dist/aos.css';
import Aos from 'aos';

const AdmissionProcess = () => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])
    return (
        <div>
            <div className='flex items-center justify-center'>
                <h1 className='text-4xl font-bold'>Admission Process</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 pb-8'>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-left" className='py-4'><MdOutlineMenuBook style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                    <h1 className=' bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>1</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Fill the application form before the last date.</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-up" className='py-4'><FaFileUpload style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>2</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Upload Your Documents
Photograph, Signature & Marksheet.</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-down" className='py-4'><MdComputer  style={{ fontSize: '5.2rem', padding: '4px' }} /></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>3</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Appear for IEM Entrance Test (Online Examination). </p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-right" className='py-4'><RiContactsFill  style={{ fontSize: '5.2rem', padding: '4px' }} /></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>4</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Appear for the Counselling.</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 data-aos="fade-down" className='py-4'><FaUserGraduate style={{ fontSize: '5.2rem', padding: '4px' }} /></h1>
                    <h1 className='bg-yellow-300 text-black text-2xl rounded-full h-10 w-10 font-semibold flex items-center justify-center'>5</h1>
                    <p className=' py-4 w-[200px] h-[100px] text-center'>Appear for the Counselling.</p>
                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess;