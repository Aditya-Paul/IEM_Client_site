'use client'
import { useState } from "react";

const accordionData = [{ title: 'Best Institute Award for MCA Course', subtitle: 'IEM Kolkata has received rank 1 for Best Institute for MCA course in West Bengal by Times of India.', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500' }, { title: 'Best Institute Award for MBA Course', subtitle: 'IEM Kolkata has received rank 1 for Best Institute for MBA Course in by West Bengal Times of India.', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500' }, { title: 'Best Institute Award for BBA Course', subtitle: 'IEM Kolkata has received rank 1 for Best Institute for BBA Course in West Bengal by Times of India', colorBg: 'bg-red-500', colorBorder: 'border-red-500' }, { title: 'Best Engineering College Award by Times of Inadia', subtitle: 'IEM was awarded best engineering college in Times Business Awards 2023 at ITC Royal Bengal.', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500' }, { title: '2nd runner-up award in RACON 2024', subtitle: 'The IEM team has received the 2nd runner-up award * East Zone a Quest quarterfinal* in RACON 2024.', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500' }];

const Awardsachivement = () => {
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className="py-10 px-6">
            <div className='flex items-center justify-center pb-6'>
                <h1 className='text-4xl text-black font-semibold '>Awards and Achievements</h1>
            </div>

            <div className="w-fit mx-auto min-h-[300px] flex shadow-md overflow-hidden">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`h-full w-fit flex items-end pb-10 bg-white border-b-8 ${_.colorBorder} shadow-[2px_2px_5px_#00000083]`}>
                            <div className={`w-16 h-16 text-white ${_.colorBg} relative flex items-center justify-center`}>
                                <span className={`w-0 h-0 ${_.colorBorder} border-r-[60px] border-b-[60px] rounded-lg border-r-transparent absolute rotate-[225deg] left-8 -z-50`}></span>0{idx + 1}
                            </div>
                        </button>
                        {/* container */}
                        <div className={`grid place-content-center  ${isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'} text-black duration-300 ease-in-out`}>
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awardsachivement;