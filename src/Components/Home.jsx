import React from "react";
import { FaVideo } from "react-icons/fa";
import PopularTopics from "./PopularTopics";
import DigitalJourneySection from "./DigitalJourneySection";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div
                className="w-full h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
            >

                <div className="absolute inset-0 overly"></div>


                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Welcome to the Digital Literacy Course
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl">
                        Helping elders and parents learn technology step-by-step with easy tutorials.
                    </p>
                    <Link to={`/tutorials`}  className="mt-5  cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition">
                        Watch Tutorial <FaVideo className="inline-block" />
                    </Link>
                </div>
            </div>
            <PopularTopics />
            <DigitalJourneySection/>
        </>
    );
};

export default Home;
