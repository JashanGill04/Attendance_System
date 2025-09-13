import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const location = useLocation();

  const links = {
    student: [
      { path: "/student", label: "Dashboard" },
      { path: "/student/leaderboard", label: "Leaderboard" },
      { path: "/student/profile", label: "Profile" },
    ],
    teacher: [{ path: "/teacher", label: "Dashboard" }],
    admin: [
      { path: "/admin", label: "Dashboard" },
    ],
  };

  return (
    <div className="w-60 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Attendance System</h2>
      <ul className="space-y-2">
        {links[role].map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                location.pathname === link.path ? "bg-gray-700" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
