import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ role, title, children, user }) {
  // Using more descriptive state names
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar: Renders only if isSidebarOpen is true */}
      {isSidebarOpen && <Sidebar role={role} />}
      
      {/* Main area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Topbar */}
        <Topbar 
          title={title} 
          user={user} 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* Scrollable content */}
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}