
import React from 'react';
import { FaSquareXTwitter  ,FaYoutube ,FaFacebookF,FaLinkedinIn    } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='bg-gray-300 p-8 flex flex-col md:flex-row'>
            <div className='flex flex-col items-start justify-center bg-opacity-30  w-1/4 border-r-2'>
                <div className=''>
                    <img className=' h-24 p-2' src="https://i.ibb.co/5Wmn8bp/logo.png" alt="" />
                </div>
                <div>
                    <h1 className='p-2 font-bold text-xl'>Institute Of Engineering and Management</h1>
                    <p className='p-2'>
                        <span className='font-bold text-lg'>Address:</span> GN-34/2, Ashram Building, Opposite to Nalban Saltlake Electronics Complex.
                    </p>
                    <p className='p-2'>
                    <span className='font-bold text-lg'>Phone: </span> 033 2357 0000
                    </p>
                </div>
            </div>
            <div className='w-3/4 '>
                <div className='py-4'>
                    <h1 className=' font-bold text-xl text-center pb-4'>Follow use</h1>
                    <div className="flex items-center justify-center space-x-10">
                        <p to="www.twiter.com"><FaSquareXTwitter   className='w-10 h-10'> </FaSquareXTwitter  ></p>
                        <p to="www.youtube.com"><FaYoutube   className='w-10 h-10'> </FaYoutube  ></p>
                        <p to="www.facebook.com"><FaFacebookF  className='w-10 h-10'> </FaFacebookF ></p>
                        <p to="www.facebook.com"><FaLinkedinIn  className='w-10 h-10'> </FaLinkedinIn ></p>
                    </div>
                </div>
                <div className='flex items-center justify-between px-6'>
                    <div>
                        <h1>Admissions</h1>
                    </div>
                    <div>
                        <h1>Academic</h1>
                    </div>
                    <div>
                        <h1>Resources</h1>
                    </div>
                    <div>
                        <h1>Others</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;