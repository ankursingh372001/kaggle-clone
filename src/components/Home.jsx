import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const { userData, fetchUser } = useContext(UserContext);
  const authData = JSON.parse(localStorage.getItem('auth-data'));
  useEffect(() => {
    fetchUser(authData.userId);
  }, []);
  return userData ? <div>Welcome {userData.name}</div> : <div>Loading...</div>;
}

export default Home;
