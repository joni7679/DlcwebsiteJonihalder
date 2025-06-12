import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Feedback = () => {
    return (
        <div className="p-10 max-w-lg mx-auto bg-white rounded-3xl shadow-2xl mt-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Feedback</h2>
            <form className="space-y-6" method="post">
             
                <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border   shadow-md"
                    />
                </div>

                
                <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border   shadow-md"
                    />
                </div>

               
                <div className="relative">
                    <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        className="w-full pl-10 pr-4 pt-3 pb-2 rounded-2xl border   shadow-md resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer w-full py-3 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-200"
                >
                    Send Feedback
                </button>
            </form>
        </div>
    );
};

export default Feedback;
