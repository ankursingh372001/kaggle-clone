import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Competitions from "./components/Competitions";
import CreateCompetition from "./components/CreateCompetition";
import Home from "./components/Home";
import Login from "./components/Login";
import Question from "./components/Question";
import QuestionDescription from "./components/QuestionDescription";
import QuestionLeaderboard from "./components/QuestionLeaderboard";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";

export default function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	const LoggedInLayout = () => {
		return (
			<div className="flex">
				<Sidebar />
				<div className="flex-grow">
					<Outlet />
				</div>
			</div>
		);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="register"
					element={<Signup />}
				/>
				<Route
					path="/"
					element={<LoggedInLayout />}>
					<Route
						path="home"
						element={<Home />}
					/>
					<Route
						path="createCompetition"
						element={<CreateCompetition />}
					/>
					<Route
						path="competitions"
						element={<Competitions />}
					/>
					<Route
						path="competitions/:competitionId"
						element={<Question />}>
						<Route
							path="description"
							element={<QuestionDescription />}
						/>
						<Route
							path="leaderboard"
							element={<QuestionLeaderboard />}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
