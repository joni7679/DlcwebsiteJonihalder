import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { getChatResponse } from "../utils/openai";

const Chatbot = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = async () => {
        if (!searchQuery.trim()) return;
        if (searchQuery.length < 2) {
            alert("Please enter at least 2 characters");
            return;
        }

        const userMessage = {
            role: "user",
            content: searchQuery,
            time: new Date().toLocaleString()
        };

        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setSearchQuery("");
        setIsTyping(true);

        const response = await getChatResponse(newMessages);

        const botMessage = {
            role: "assistant",
            content: response.content,
            time: new Date().toLocaleString()
        };

        setMessages([...newMessages, botMessage]);
        setIsTyping(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-4">
            <div className="w-[65vw] h-[80vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-4">
                    🤖 DigiBuddy
                </div>

                <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${msg.role === "user"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                <p>{msg.content}</p>

                                <p className={`text-[10px] text-right  mt-1 ${msg.role === "user" ? "text-white" : "text-black"}`}>
                                    {msg.time}
                                </p>

                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-200 text-sm px-4 py-2 rounded-xl animate-pulse">
                                Typing...
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-t px-4 py-3 bg-white flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="flex-1 px-4 py-4 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={isTyping}
                        className={`px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition ${isTyping ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        <IoSendSharp />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
