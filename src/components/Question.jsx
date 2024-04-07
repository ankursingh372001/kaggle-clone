import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Question = () => {
  const [contestData, setContestData] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const { contestId } = useParams();
  useEffect(() => {
    const getContestData = async () => {
      const response = await fetch(
        `http://localhost:9090/api/contests/${contestId}`
      );
      const json = await response.json();
      console.log({ json });
      setContestData(json);
    };
    getContestData();
  }, []);

  const joinCompetition = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9090/api/contests/enroll/${contestId}`,
        userData.id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      setIsEnrolled(true);
      alert("Joined Competition Successfully");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (!contestData || !userData) return;
    for (const contest of userData?.enrolledContests) {
      if (contest.contestId == contestId) {
        setIsEnrolled(true);
        return;
      }
    }
    setIsEnrolled(false);
  }, [contestData, userData]);

  return (
    <>
      {contestData ? (
        <div>
          <div className="w-[1200px] mx-auto mt-20">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-800">
                  {contestId} {contestData.title}
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  {Date(contestData.startDate)} to {Date(contestData.endDate)}
                </p>
              </div>
              {userData.role === "USER" && (
                <div>
                  <button
                    onClick={joinCompetition}
                    className="px-6 py-2 bg-gray-950 text-white rounded-xl font-bold"
                  >
                    {!isEnrolled ? `Enroll Competition` : `Enrolled`}
                  </button>
                </div>
              )}
            </div>
            <div className="mt-20 flex gap-6 text-gray-700">
              <NavLink
                to={`/competitions/${contestId}/description`}
                className={({ isActive }) =>
                  isActive ? "pb-3 border-b-4 border-gray-950" : ""
                }
              >
                Description
              </NavLink>
              <NavLink
                to={`/competitions/${contestId}/leaderboard`}
                className={({ isActive }) =>
                  isActive ? "pb-3 border-b-4 border-gray-950" : ""
                }
              >
                Leaderboard
              </NavLink>
              {userData?.role === "ADMIN" && (
                <NavLink
                  to={`/competitions/${contestId}/report`}
                  className={({ isActive }) =>
                    isActive ? "pb-3 border-b-4 border-gray-950" : ""
                  }
                >
                  Report
                </NavLink>
              )}
            </div>
          </div>
          <div className="border-b-2"></div>
          <Outlet context={[contestData]} />
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default Question;
