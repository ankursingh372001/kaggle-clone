import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCompassOutline, IoTrophyOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Sidebar() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  return (
    <div className="w-64">
      <div className="w-64 h-screen fixed text-base border-2 border-[#DADCE0]">
        <div className="w-64 h-16 flex items-center">
          <button className="w-12 h-12 ml-3 text-2xl flex items-center justify-center hover:rounded-full hover:bg-[#DADCE0]">
            <IoIosMenu />
          </button>
          <img
            src="D:\Projects\kaggle-clone\src\assets\logo.png"
            className="w-[82px] ml-2"
          />
        </div>
        {userData?.role === "ADMIN" && (
          <div className="w-64 h-20 flex items-center">
            <Link to="createCompetition">
              <button className="ml-3 px-6 py-2 flex items-center justify-center rounded-full shadow-sm shadow-gray-400 hover:shadow-md">
                <FaPlus className="w-9 h-9 text-[#20BEFF]" />
                <span className="ml-3 text-base text-[#3c4043]">Create</span>
              </button>
            </Link>
          </div>
        )}
        <div className="mt-4 text-gray-600">
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? "bg-gray-100" : "")}
          >
            <div className="h-12 pl-6 flex items-center bg-inherit hover:bg-gray-100">
              <IoCompassOutline className="w-6 h-6" />
              <span className="pl-5">Home</span>
            </div>
          </NavLink>
          <NavLink
            to="competitions"
            className={({ isActive }) => (isActive ? "bg-gray-100" : "")}
          >
            <div className="h-12 pl-6 flex items-center bg-inherit hover:bg-gray-100">
              <IoTrophyOutline className="w-6 h-6" />
              <span className="pl-5">Competitions</span>
            </div>
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) => (isActive ? "bg-gray-100" : "")}
          >
            <div className="h-12 pl-6 flex items-center bg-inherit hover:bg-gray-100">
              <CgProfile className="w-6 h-6" />
              <span className="pl-5">Profile</span>
            </div>
          </NavLink>
          <button
            className="h-12 w-[100%] pl-6 flex items-center hover:bg-gray-100"
            onClick={() => {
              localStorage.removeItem("auth-data");
              navigate("/login");
            }}
          >
            <PiSignOut className="w-6 h-6 " />
            <span className="pl-5">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
