import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar max-w-screen-2xl absolute z-10 font-extrabold text-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Admission</a></li>
                        <li>
                            <details>
                                <summary>Campus Life</summary>
                                <ul className="p-2 text-black">
                                    <li><a>Galleries</a></li>
                                    <li><a>Code of Conduct</a></li>
                                    <li><a>IEM Magazine</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Department</summary>
                                <ul className="p-2 text-black">
                                    <li><a>CSE</a></li>
                                    <li><a>IT</a></li>
                                    <li><a>ECE</a></li>
                                    <li><a>EEE</a></li>
                                    <li><a>EE</a></li>
                                    <li><a>ML</a></li>
                                    <li><a>AI</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Academics</summary>
                                <ul className="p-2 text-black">
                                    <li><a>Results</a></li>
                                    <li><a>Higher Studies Records</a></li>
                                    <li><a>Academic ERP</a></li>
                                    <li><a>Inclusivly</a></li>
                                    <li><a>Outreach</a></li>
                                    <li><a>List of Holidays</a></li>
                                    <li><a>Teaching Learning process</a></li>
                                    <li><a>Library</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Notices</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <img className=' h-24 pl-0 md:pl-10' src="https://i.ibb.co/5Wmn8bp/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    <li><a>Home</a></li>
                    <li><a>Admission</a></li>
                    <li>
                        <details>
                            <summary>Campus Life</summary>
                            <ul className="p-2 text-black">
                                <li><a>Galleries</a></li>
                                <li><a>Code of Conduct</a></li>
                                <li><a>IEM Magazine</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Department</summary>
                            <ul className="p-2 text-black">
                                <li><a>CSE</a></li>
                                <li><a>IT</a></li>
                                <li><a>ECE</a></li>
                                <li><a>EEE</a></li>
                                <li><a>EE</a></li>
                                <li><a>ML</a></li>
                                <li><a>AI</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Academics</summary>
                            <ul className="p-2 text-black">
                                <li><a>Results</a></li>
                                <li><a>Higher Studies Records</a></li>
                                <li><a>Academic ERP</a></li>
                                <li><a>Inclusivly</a></li>
                                <li><a>Outreach</a></li>
                                <li><a>List of Holidays</a></li>
                                <li><a>Teaching Learning process</a></li>
                                <li><a>Library</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Notices</a></li>
                    <li><a>Contact Us</a></li>

                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;