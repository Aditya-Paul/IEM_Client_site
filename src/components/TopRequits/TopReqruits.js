'use client'


const TopReqruits = () => {

    return (
        <div className=' p-8'>
            <div className='flex items-center justify-center pb-6'>
                <h1 className='text-4xl text-black font-semibold '>PLacements</h1>
            </div>
            <div className=" flex flex-col md:flex-row items-center justify-center space-y-4">
                <div className="md:w-[40%] flex flex-col items-end justify-center border-r-2 pr-4 pb-6">
                    <div className="flex flex-col items-center justify-center py-4">
                        <h1 className="text-6xl font-cold">60+</h1>
                        <p>Top Companies</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4">
                        <h1 className="text-6xl font-cold">100+</h1>
                        <p>Job Offers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4">
                        <h1 className="text-6xl font-cold">20LPA</h1>
                        <p>Higest Salary Offer</p>
                    </div>
                </div>

                <div className=" md:w-[60%] flex flex-col items-center md:items-start p-2 md:pl-10 justify-center">
                    <img className=' ' src="https://i.ibb.co/0tCrWJ5/req.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default TopReqruits;