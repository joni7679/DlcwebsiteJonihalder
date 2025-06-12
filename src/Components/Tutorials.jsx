import React from "react";
import { FaVideo, FaWhatsapp } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const tutorialsData = [
    {
        title: "Mastering WhatsApp",
        description:
            "Learn how to send messages, make calls, share photos, and connect with your family and friends.",
        icon: <FaWhatsapp className="text-green-500 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-green-500",
    },
    {
        title: "Using Paytm for Payments",
        description:
            "Safely make online payments, recharge your phone, and pay utility bills with ease.",
        icon: <SiPaytm className="text-blue-900 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-blue-500",
    },
    {
        title: "Navigating with Google Maps",
        description:
            "Find directions, explore new places, and locate nearby services effortlessly.",
        icon: <MdLocationOn className="text-red-500 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-red-500",
    },
];

const Tutorials = () => (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Our Easy to Follow Tutorials
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tutorialsData.map((tutorial, index) => (
                <div
                    key={index}
                    className={`bg-white shadow-md max-w-md rounded-xl p-6 ${tutorial.borderColor}`}
                >
                    <div className="mb-4">{tutorial.icon}</div>
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                        {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">{tutorial.description}</p>
                    <div className="flex justify-center">
                        <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition">
                            Watch Tutorial <FaVideo className="inline-block" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Tutorials;
