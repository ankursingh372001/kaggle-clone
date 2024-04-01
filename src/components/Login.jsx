import React, { useContext, useState } from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
    console.log(credentials);
  };

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gray-300">
      <div className="flex-col bg-white p-20 rounded-2xl shadow-lg">
        <h1 className="text-[#23bcfb] text-[100px] mb-20">Kaggle</h1>
        <form>
          <div className="flex items-center gap-4 my-5">
            <FaUser color="#23bcfb" className="text-xl" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={credentials.email}
              onChange={onChangeHandler}
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>
          <div className="flex items-center gap-4 my-5">
            <FaKey color="#23bcfb" className="text-xl" />
            <input
              id="password"
              type="password"
              required
              placeholder="Password"
              value={credentials.password}
              onChange={onChangeHandler}
              className="outline-none border-b-[1px] focus:border-gray-400 p-2 grow"
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (loginUser(credentials)) {
                navigate("/home");
                alert("Logged In Successfully");
              } else alert("Something went wrong");
            }}
            className="bg-[#23bcfb] rounded-lg w-full text-white font-bold py-3 mt-5"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-400 mt-20 text-center">
          New user?
          <button
            className="text-[#23bcfb]"
            onClick={() => navigate("/register")}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
