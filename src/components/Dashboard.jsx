import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
    let auth = localStorage.getItem("auth-data");
    return auth == undefined ? (
      <Navigate to="/login" />
    ) : (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    );
}

export default Dashboard;