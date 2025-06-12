import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    let navItems = [
        { name: "Home", },
        { name: "Tutorials", path: "tutorials" },
        { name: "Ai Chat", path: "aichat" },
        { name: "Feedback", path: "feedback" }
    ];

    return (
        <>
            <nav className="w-full bg-gray-900 text-white ">
                <div className='container mx-auto px-6 flex justify-between items-center p-5'>
                    <Link to={`/`} className="text-xl font-bold">Empowering Digital Literacy!</Link>
                    <div className="space-x-4">
                        {navItems.map((nav, index) => (
                            <Link key={index} to={nav.path} className="">
                                {nav.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar;
