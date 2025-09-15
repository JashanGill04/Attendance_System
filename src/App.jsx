import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/Student/StudentDashboard";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Leaderboard from "./pages/Student/Leaderboards";
import Profile from "./pages/Student/Profile";
import Dummy from "./pages/Teacher/Dummy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path = "/teacher" >
      <Route index element = { <TeacherDashboard/> } />
        <Route path = "dummy" element = {<Dummy/>} />
      </Route>

      <Route path="/student" >
      <Route index element={<StudentDashboard />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
