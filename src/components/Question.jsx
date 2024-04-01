import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Question = () => {
  const [contestData, setContestData] = useState(null);
  const { contestId } = useParams();
  useEffect(() => {
	const getContestData = async () => {
		const response = await fetch(`http://localhost:9090/api/contests/${contestId}`);
      	const json = await response.json();
      	console.log({ json });
		setContestData(json);
	}
	getContestData();
  }, []);
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
              <div>
                <button className="px-6 py-2 bg-gray-950 text-white rounded-xl font-bold">
                  Join Competition
                </button>
              </div>
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
