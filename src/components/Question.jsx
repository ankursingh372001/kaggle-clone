import { NavLink, Outlet } from "react-router-dom";

function Question() {
	return (
		<div>
			<div className="w-[1200px] mx-auto mt-20">
				<div className="flex justify-between">
					<div>
						<h1 className="text-4xl font-bold text-gray-800">Steel Plate Defect Prediction</h1>
						<p className="mt-2 text-base text-gray-500">Playground Series - Season 4, Episode 3</p>
					</div>
					<div>
						<button className="px-6 py-2 bg-gray-950 text-white rounded-xl font-bold">Join Competition</button>
					</div>
				</div>
				<div className="mt-20 flex gap-6 text-gray-700">
					<NavLink
						to="/competitions/1/description"
						className={({ isActive }) => (isActive ? "pb-3 border-b-4 border-gray-950" : "")}>
						Description
					</NavLink>
					<NavLink
						to="/competitions/1/leaderboard"
						className={({ isActive }) => (isActive ? "pb-3 border-b-4 border-gray-950" : "")}>
						Leaderboard
					</NavLink>
				</div>
			</div>
			<div className="border-b-2"></div>
			<Outlet />
		</div>
	);
}

export default Question;
