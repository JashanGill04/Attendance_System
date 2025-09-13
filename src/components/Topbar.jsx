import { useNavigate } from "react-router-dom";

export default function Topbar({ title, user, setIsSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // Correctly toggles the state now
  const handleClick = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <div className="flex items-center space-x-4">
        <button
          className="text-lg text-gray-600" // Simplified classes, removed incorrect aria-hidden
          onClick={handleClick}
        >
          ☰
        </button>
        <div className="text-lg font-semibold">{title}</div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="font-medium text-sm">{user?.name ?? "Student"}</div>
          <div className="text-xs text-gray-500">{user?.role ?? "Student"}</div>
        </div>

        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
          {user?.name ? user.name.charAt(0).toUpperCase() : "S"}
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}