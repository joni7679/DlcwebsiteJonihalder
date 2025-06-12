import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tutorials from "../Components/Tutorials";
import Home from "../Components/Home";
import Chatbot from "../Components/Chatbot";
import Feedback from "../Components/Feedback";

export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "tutorials",
                element: <Tutorials />
            },
            {
                path: "tutorials",
                element: <Tutorials />
            },

            {
                path: "aichat",
                element: <Chatbot />

            },
            {
                path: "feedback",
                element:<Feedback/>
            },
            {
                path: "*",
                element: <h1>error404</h1>
            }
        ]
    },

])