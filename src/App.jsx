import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

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

	return loggedIn ? <LoggedInLayout /> : <Outlet />;
}
