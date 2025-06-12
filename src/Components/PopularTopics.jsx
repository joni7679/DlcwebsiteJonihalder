import React from "react";
import { FaWhatsapp, FaShieldAlt, FaRibbon } from "react-icons/fa";

const topicsData = [
    {
        title: "Stay Connected",
        description: "Learn WhatsApp, video calling, and messaging to stay in touch with family and friends.",
        icon: <FaWhatsapp className="text-green-500 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-green-500",
        backgroundColor:"bg-green-300 opacity-40",
        buttonColor: "bg-green-500 hover:bg-green-600",
        btnText: "Learn Communication"
    },
    {
        title: "Digital Payments",
        description: "Safely use online banking, Paytm, and digital wallets for bills and shopping.",
        icon: <FaShieldAlt className="text-blue-600 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-blue-600",
        backgroundColor:"bg-blue-300 opacity-40",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        btnText: "Learn Payments"
    },
    {
        title: "Online Safety",
        description: "Protect yourself from scams and learn safe browsing habits for peace of mind.",
        icon: <FaRibbon className="text-purple-500 text-5xl mx-auto" />,
        borderColor: "border-t-4 border-purple-500",
        backgroundColor:"bg-purple-300 opacity-40",
        buttonColor: "bg-purple-500 hover:bg-purple-600",
        btnText: "Learn Safety"
    }
];

const PopularTopics = () => (
    <div className="p-6 md:p-10 bg-white min-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Most Popular Learning Topics
        </h2>
        <p className="text-center text-gray-500 mb-10">
            Start with what matters most to you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topicsData.map((topic, index) => (
                <div
                    key={index}
                    className={`bg-gray-50 shadow-md max-w-md mx-auto rounded-xl p-6 ${topic.borderColor} `}
                >
                    <div className="mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                        {topic.title}
                    </h3>
                    <p className="text-gray-700 text-center mb-6">{topic.description}</p>
                    <div className="flex justify-center">
                        <button className={`cursor-pointer ${topic.buttonColor} text-white px-6 py-2 rounded-md font-semibold shadow transition`}>
                            {topic.btnText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default PopularTopics;
