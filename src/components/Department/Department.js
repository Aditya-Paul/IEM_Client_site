import React from 'react';

const Department = () => {
    return (
        <div className='bg-blue-500 py-10'>
            <div className='flex items-center justify-center py-10'>
                <div className='w-2/4 border-r-2 pr-4'>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-white text-end '>Study</h1>
                    <p className=' text-white pl-0 md:pl-20 text-end'>
                        IEM sets the benchmarks of the global education with a system that matches the best of practices, theories, resources and standards all over the world
                    </p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-12 w-2/4'>
                    <div className=' border-r-2 px-4 md:px-6 lg:px-8'>
                        <h1 className='text-2xl font-extrabold text-white'>12+</h1>
                        <p className='text-xl font-extrabold text-white'>Departments</p>
                    </div>
                    <div className='border-r-2 px-4 md:px-6 lg:px-8'>
                        <h1 className='text-2xl font-extrabold text-white'>20+</h1>
                        <p className='text-xl font-extrabold text-white'>Departments</p>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto bg-gray-800'>
                <div className='flex flex-col md:flex-row items-center justify-center w-full'>
                    <h1 className='w-full md:w-1/2 h-12 text-black bg-white text-2xl font-normal flex items-center justify-center'>Undergraduate Programmes</h1>
                    <h1 className='w-full md:w-1/2 h-12 text-white bg-black text-2xl font-normal flex items-center justify-center'>Postgraduate Programmes</h1>

                </div>
                <div className='flex items-center justify-center space-x-4 pt-4'>
                    <h1 className='text-4xl font-normal text-white'>FIND A COURSE</h1>
                    <div className='flex space-x-2'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className='btn text-Black'>Search</button>
                    </div>
                </div>
                <div>Ami</div>
            </div>
        </div>
    );
};

export default Department;