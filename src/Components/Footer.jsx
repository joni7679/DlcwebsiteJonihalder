import React from 'react'
import { FaTv } from 'react-icons/fa'
import { FcFeedback } from 'react-icons/fc'
import { IoChatbubbleSharp } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Footer() {
    const quickLinks = [
        { title: "Tutorials", icon: <FaTv className='text-xl' /> },
        { title: "AI Assistant", icon: <IoChatbubbleSharp className='text-xl' /> },
        { title: "Feedback", icon: <FcFeedback className='text-xl' /> },
        { title: "About Us", icon: <FcFeedback className='text-xl' /> },
    ]

    return (
        <>
            <div className='w-full bg-gray-900 text-white pt-10 pb-5'>
                <div className="container mx-auto px-6">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div>
                            <h1 className='text-xl font-bold mb-3'>
                                <FaTv className='inline-block text-blue-500 mr-2' />
                                Digital Literacy Course
                            </h1>
                            <p className='text-gray-300'>
                                Helping parents and senior citizens become confident digital users. We believe learning technology should be simple, safe, and fun.
                            </p>
                            <p className='mt-3 text-sm text-gray-400'>
                                Made with <span className='text-red-500'>❤️</span> by <span className='font-semibold text-blue-300'>Joni Halder</span> for digital empowerment.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold mb-3'>Quick Links</h2>
                            {quickLinks.map((link, index) => (
                                <Link key={index} className='flex items-center gap-2 text-gray-300 hover:text-white mt-3'>
                                    {link.icon} {link.title}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold mb-3'>Get Help</h2>
                            <p className='flex items-center gap-2 mt-3 text-gray-300'>
                                <MdOutlineMailOutline className='text-blue-400 text-lg' /> jonihalder814@gmail.com
                            </p>
                            <p className='flex items-center gap-2 mt-3 text-gray-300'>
                                <LuPhoneCall className='text-blue-400 text-lg' /> +91 8513011792
                            </p>
                        </div>
                    </div>

                    <div className='border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400'>
                        © 2024 Digital Literacy Course. Crafted with <span className='text-red-500'>❤️</span> by Joni Halder for everyone who wants to explore the digital world.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
