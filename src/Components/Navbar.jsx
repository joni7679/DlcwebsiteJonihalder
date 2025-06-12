import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Ai Chat", path: "/aichat" },
        { name: "Feedback", path: "/feedback" }
    ];

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Empowering Digital Literacy!
                </Link>

              
                <div className="hidden md:flex space-x-6">
                    {navItems.map((nav, index) => (
                        <Link key={index} to={nav.path} className="text-gray-700 hover:text-blue-600 transition">
                            {nav.name}
                        </Link>
                    ))}
                </div>

               
                <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

          
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 space-y-4">
                    {navItems.map((nav, index) => (
                        <Link
                            key={index}
                            to={nav.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-800 hover:text-blue-600"
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </div>

        
            {isOpen && (
                <div
                    className="fixed inset-0 overly bg-opacity-30 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
}

export default Navbar;
