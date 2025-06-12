import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export const getChatResponse = async (messages) => {
    console.log("API_KEY:", API_KEY); 
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are DigiBuddy, a helpful assistant." },
                    ...messages.map(({ role, content }) => ({ role, content }))
                ],
                temperature: 0.7
            },
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        return response.data.choices[0].message;
    } catch (error) {
        console.error(" OpenAI API Error:", error.response?.data || error.message);
        return {
            role: "assistant",
            content: "Something went wrong. Please try again."
        };
    }
};
