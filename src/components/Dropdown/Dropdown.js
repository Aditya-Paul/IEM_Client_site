import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
const Dropdown = () => {
    return (
        <div>
            <div className='flex items-center justify-center md:justify-end pr-0 md:pr-16 space-x-4 bg-black text-white'>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center">About Iem Group<IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
                        <li><a>About Us</a></li>
                        <li><a>Visiion & Mission</a></li>
                        <li><a>About Management</a></li>
                        <li><a>INfastructure</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center">Careers<IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
                        <li><a>Graduation Outcome</a></li>
                        <li><a>Placements</a></li>
                        <li><a>Placement News</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center">News & Awards<IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
                        <li><a>News & Articles</a></li>
                        <li><a>Awards</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center">R&D<IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
                        <li><a>Publication</a></li>
                        <li><a>Awards</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="flex items-center">Events & Activities<IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 text-black">
                        <li><a>Event Calender</a></li>
                        <li><a>Conference</a></li>
                        <li><a>Seminars & Workshops</a></li>
                        <li><a>Faculty Development Programs</a></li>
                        <li><a>Crs Activity</a></li>
                        <li><a>Professional Society</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Dropdown;