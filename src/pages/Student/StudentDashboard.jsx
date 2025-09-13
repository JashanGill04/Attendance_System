import DashboardLayout from "../../layouts/DashboardLayout";

export default function StudentDashboard() {
  // Dummy data
  const attendanceHistory = [
    { date: "2025-09-09", status: "Present" },
    { date: "2025-09-10", status: "Absent" },
    { date: "2025-09-11", status: "Present" },
    { date: "2025-09-12", status: "Present" },
    { date: "2025-09-13", status: "Present" },
  ];

  const leaderboard = [
    { name: "Jashan", points: 96 },
    { name: "Harshit", points: 95 },
    { name: "Namish", points: 85 },
    { name: "Bhawik", points: 82 },
    { name: "LingLong", points: 80 },
  ];

  const streak = 5;
  const attendancePercent = 87;

  return (
    <DashboardLayout role="student" title="Student Dashboard">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Today’s Attendance */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">Today’s Attendance</h3>
          <p className="mt-4 text-green-600 font-bold text-2xl">✅ Present</p>
        </div>

        {/* Attendance % */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">Attendance %</h3>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${attendancePercent}%` }}
              ></div>
            </div>
            <p className="mt-2 text-blue-600 font-bold text-xl">
              {attendancePercent}%
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">Streak</h3>
          <p className="mt-4 text-orange-600 font-bold text-2xl">
            🔥 {streak} days
          </p>
          {streak >= 5 && (
            <span className="mt-2 inline-block bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
              ⭐ Consistency Badge
            </span>
          )}
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Attendance History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceHistory.map((record, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border-b p-2">{record.date}</td>
                  <td
                    className={`border-b p-2 font-medium ${
                      record.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 3 Leaderboard Preview */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
        <ul>
          {leaderboard.slice(0, 3).map((student, idx) => (
            <li key={idx} className="flex justify-between py-1">
              <span>
                {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"} {student.name}
              </span>
              <span className="font-bold text-blue-600">{student.points} pts</span>
            </li>
          ))}
        </ul>
        <a
          href="/student/leaderboard"
          className="text-blue-500 text-sm mt-2 inline-block"
        >
          View Full Leaderboard →
        </a>
      </div>
    </DashboardLayout>
  );
}
