import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Competitions from "./components/Competitions.jsx";
import CreateCompetition from "./components/CreateCompetition.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Signup />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "createCompetition",
				element: <CreateCompetition />,
			},
			{
				path: "competitions",
				element: <Competitions />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
