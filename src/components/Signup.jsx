import React from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gray-300">
			<div className="flex-col bg-white p-20 rounded-2xl shadow-lg">
				<h1 className="text-[#23bcfb] text-[100px] mb-20">Kaggle</h1>
				<form>
					<div className="flex items-center gap-4 my-5">
						<FaUser
							color="#23bcfb"
							className="text-xl"
						/>
						<input
							type="text"
							placeholder="Username"
							className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
						/>
					</div>
					<div className="flex items-center gap-4 my-5">
						<FaKey
							color="#23bcfb"
							className="text-xl"
						/>
						<input
							type="password"
							placeholder="Password"
							className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
						/>
					</div>
					<div className="flex items-center gap-4 my-5">
						<FaKey
							color="#23bcfb"
							className="text-xl"
						/>
						<input
							type="password"
							placeholder="Confirm password"
							className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
						/>
					</div>
					<button className="bg-[#23bcfb] rounded-lg w-full text-white font-bold py-3 mt-5">Register</button>
				</form>
				<p className="text-gray-400 mt-20 text-center">
					Have an account?{" "}
					<button
						className="text-[#23bcfb]"
						onClick={() => navigate("/login")}>
						Sign In
					</button>
				</p>
			</div>
		</div>
	);
}

export default Signup;
