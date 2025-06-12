import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';

function DigitalJourneySection() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-blue-600 to-green-500 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                Ready to Start Your Digital Journey?
            </h1>
            <p className="text-center text-lg sm:text-xl max-w-2xl mb-8">
                Join thousands of learners who have gained confidence with technology. It's never too late to start!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition duration-300">
                    <FaBookOpen className="text-xl" />
                    Start with Tutorials
                </button>

                <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-500 transition duration-300">
                    <BsChatDots className="text-xl" />
                    Ask DigiBuddy
                </button>
            </div>
        </div>
    );
}

export default DigitalJourneySection;
