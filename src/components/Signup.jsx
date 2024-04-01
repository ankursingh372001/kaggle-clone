import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Signup() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [passwordCheck, setPasswordCheck] = useState(false);
  const { registerUser } = useContext(UserContext);

  const onChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    console.log(userDetails);
  };

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    const flag = await registerUser(userDetails);
    if (flag) {
      alert("Registered Successfully");
      navigate("/login");
    } else alert("Something went wrong");
  };

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gray-300">
      <div className="flex-col bg-white p-20 rounded-2xl shadow-lg">
        <h1 className="text-[#23bcfb] text-[100px] mb-20">MLathon</h1>
        <form
          onSubmit={onSignUpHandler}
          className="flex flex-col items-center justify-center"
        >
          <Select
            style={{ width: "100%" }}
            labelId="user-type-label"
            id="user-type-select"
            value={userDetails.role}
            label="User Type"
            defaultValue="USER"
            onChange={(e) => {
              setUserDetails({ ...userDetails, role: e.target.value });
            }}
          >
            <MenuItem value={"USER"}>USER</MenuItem>
            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
          </Select>
          <div className="flex items-center gap-4 my-5">
            <FaUser color="#23bcfb" className="text-xl" />
            <input
              id="name"
              type="text"
              required
              onChange={onChangeHandler}
              placeholder="Name"
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>
          <div className="flex items-center gap-4 my-5">
            <FaUser color="#23bcfb" className="text-xl" />
            <input
              id="email"
              type="email"
              required
              onChange={onChangeHandler}
              placeholder="Email"
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>
          <div className="flex items-center gap-4 my-5">
            <FaKey color="#23bcfb" className="text-xl" />
            <input
              id="password"
              type="password"
              required
              onChange={onChangeHandler}
              minLength={6}
              placeholder="Password"
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>
          <div className="flex items-center gap-4 my-5">
            <FaKey color="#23bcfb" className="text-xl" />
            <input
              id="confirm-password"
              type="password"
              required
              minLength={6}
              onChange={(e) => {
                setPasswordCheck(e.target.value === userDetails.password);
              }}
              placeholder="Confirm password"
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>
          {!passwordCheck && (
            <span color="red">Password and Confirm Password must be same</span>
          )}
          <button
            type="submit"
            disabled={!passwordCheck}
            className="bg-[#23bcfb] rounded-lg w-full text-white font-bold py-3 mt-5"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 mt-20 text-center">
          Have an account?{" "}
          <button className="text-[#23bcfb]" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
