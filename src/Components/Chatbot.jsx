import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { getChatResponse } from "../utils/openai";


const Chatbot = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    if (!API_KEY) {
    console.error("❌ OpenAI API key not found in environment variables.");
    return { role: "assistant", content: "Configuration error: Missing API key." };
}
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = async () => {
        if (!searchQuery.trim()) return;
        if (searchQuery.length < 2) {
            alert("Please enter at least 2 characters");
            return;
        }

        const newMessages = [...messages, { role: "user", content: searchQuery }];
        setMessages(newMessages);
        setSearchQuery("");
        setIsTyping(true);

        const response = await getChatResponse(newMessages);

        setMessages([
            ...newMessages,
            { role: "assistant", content: response.content },
        ]);
        setIsTyping(false);
    };

    // key down logic here
    const handleKeyDown = (e) =>{
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-4">
            <div className="w-[65vw] h-[80vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-4">
                    🤖 DigiBuddy
                </div>

                <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto h-96">
                  
                  
                  
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`px-4 py-2 rounded-xl text-sm ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}>
                                {msg.content}
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
                        onChange={handleInputChange} onKeyDown={handleKeyDown}
                        className="flex-1 px-4 py-4 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        onClick={handleSubmit}
                        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        Send <IoSendSharp className="inline-block ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
