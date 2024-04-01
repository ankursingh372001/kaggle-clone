import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContext } from "./context/UserContext.js";
import { UserState } from "./context/UserState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserState>
    <App />
  </UserState>
);
