import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Competitions from "./components/Competitions";
import CreateCompetition from "./components/CreateCompetition";
import Home from "./components/Home";
import Login from "./components/Login";
import Question from "./components/Question";
import QuestionDescription from "./components/QuestionDescription";
import QuestionLeaderboard from "./components/QuestionLeaderboard";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import QuestionReport from "./components/QuestionReport";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="createCompetition" element={<CreateCompetition />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="competitions/:contestId" element={<Question />}>
            <Route path="description" element={<QuestionDescription />} />
            <Route path="leaderboard" element={<QuestionLeaderboard />} />
            <Route path="report" element={<QuestionReport />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
