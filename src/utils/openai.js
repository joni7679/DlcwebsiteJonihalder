import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const getChatResponse = async (messages) => {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are DigiBuddy, a helpful assistant." },
                    ...messages.map(({ role, content }) => ({ role, content })) // remove time before sending
                ],
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message;

    } catch (error) {
        console.error("API Error:", error?.response?.data || error.message);
        return {
            role: "assistant",
            content: "Sorry, something went wrong. Please try again later.",
        };
    }
};
