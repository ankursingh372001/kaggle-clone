import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserState = (props) => {
  const [userData, setUserData] = useState(null);
  const [authData, setAuthData] = useState(null);
  
  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9090/api/user/${userId}`);
      const json = await response.json();
      setUserData(json);
      console.log("userData", json);
    } catch (error) {
      console.log("fetchUserError: ", error.message);
    }
  };

  const loginUser = async (credentials) => {
    try {
      const response = await fetch(`http://localhost:9090/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const userData = await response.json();
      localStorage.setItem("auth-data", JSON.stringify(userData));
      console.log("auth-data", userData);
      setAuthData(userData);
      if (userData.userId) return true;
      else throw new Error("Error occured while login, check server logs");
    } catch (error) {
      console.log("loginUserError: ", error.message);
      return false;
    }
  };

  const registerUser = async (userdetails) => {
    try {
      const response = await fetch(`http://localhost:9090/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdetails),
      });
      const json = await response.json();
      return true;
    } catch (error) {
      console.log("fetchUserError: ", error.message);
      return false;
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{ userData, fetchUser, loginUser, registerUser }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};
