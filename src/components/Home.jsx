import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const { userData, fetchUser } = useContext(UserContext);
  const authData = JSON.parse(localStorage.getItem('auth-data'));
  useEffect(() => {
    fetchUser(authData.userId);
  }, []);
  return userData ? <div className="flex h-screen w-screen items-center justify-center border-1 text-[#23bcfb] text-[100px] mb-20">Welcome {userData.name}</div> : <div>Loading...</div>;
}

export default Home;
