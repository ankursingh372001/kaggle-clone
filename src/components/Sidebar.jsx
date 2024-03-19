import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCompassOutline, IoTrophyOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div className="w-64">
			<div className="w-64 h-screen fixed text-base border-2 border-[#DADCE0]">
				<div className="w-64 h-16 flex items-center">
					<button className="w-12 h-12 ml-3 text-2xl flex items-center justify-center hover:rounded-full hover:bg-[#DADCE0]">
						<IoIosMenu />
					</button>
					<img
						src="https://www.kaggle.com/static/images/site-logo.svg"
						className="w-[82px] ml-2"
					/>
				</div>
				<div className="w-64 h-20 flex items-center">
					<button className="ml-3 px-6 py-2 flex items-center justify-center rounded-full shadow-sm shadow-gray-400 hover:shadow-md">
						<FaPlus className="w-9 h-9 text-[#20BEFF]" />
						<span className="ml-3 text-base text-[#3c4043]">Create</span>
					</button>
				</div>
				<div className="mt-4 text-slate-600">
					<div className="h-12 pl-6 flex">
						<IoCompassOutline className="w-6 h-6" />
						<span className="pl-5">Home</span>
					</div>
					<div className="h-12 pl-6 flex">
						<IoTrophyOutline className="w-6 h-6" />
						<span className="pl-5">Competitions</span>
					</div>
					<div className="h-12 pl-6 flex">
						<CgProfile className="w-6 h-6" />
						<span className="pl-5">Profile</span>
					</div>
					<div className="h-12 pl-6 flex">
						<PiSignOut className="w-6 h-6" />
						<span className="pl-5">Sign Out</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
