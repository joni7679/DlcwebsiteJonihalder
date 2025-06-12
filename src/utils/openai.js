import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
console.log(API_KEY);



        
export const getChatResponse = async (messages) => {
    try {
        const response = await axios.post(`https://api.openai.com/v1/chat/completions`,
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are DigiBuddy, a helpful assistant." },
                    ...messages,
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
        console.log("res",response.data)
        return response.data.choices[0].message;
    } catch (error) {
        console.error(error, "SomeThing is Worng plz try aging later... ");
        return { role: "assistant", content: " Sorry, something went wrong." };
    }

};
