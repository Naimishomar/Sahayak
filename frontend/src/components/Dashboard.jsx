import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Settings,
  Bell,
  Search,
  Calendar,
  FileText,
  Target,
  User,
} from "lucide-react";
import DashboardPage from "../pages/DashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ReportsPage from "../pages/ReportsPage";
import UsersPage from "../pages/UsersPage";
import GoalsPage from "../pages/GoalsPage";
import CalendarPage from "../pages/CalendarPage";
import SettingsPage from "../pages/SettingsPage";
import UserAccount from "../pages/UserAccount";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "reports":
        return <ReportsPage />;
      case "users":
        return <UsersPage />;
      case "goals":
        return <GoalsPage />;
      case "calendar":
        return <CalendarPage />;
      case "settings":
        return <SettingsPage />;
      case "account":
        return <UserAccount />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-full bg-black/90">
      {/* Sidebar */}
      <div className="w-64 bg-black/90 fixed h-screen text-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg">Sahayak</span>
          </Link>
        </div>

        <nav className="flex-1 px-4">
          <div className="space-y-1">
            <button
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                activePage === "dashboard"
                  ? "bg-gray-100 text-gray-900"
                  : "text-white hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setActivePage("dashboard")}
            >
              <BarChart3 className="w-4 h-4 mr-3" />
              Dashboard
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                activePage === "analytics"
                  ? "bg-gray-100 text-gray-900"
                  : "text-text-white hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setActivePage("analytics")}
            >
              <TrendingUp className="w-4 h-4 mr-3" />
              Analytics
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                activePage === "reports"
                  ? "bg-gray-100 text-gray-900"
                  : "text-white hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setActivePage("reports")}
            >
              <FileText className="w-4 h-4 mr-3" />
              Reports
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                activePage === "users"
                  ? "bg-gray-100 text-gray-900"
                  : "text-white hover:bg-gray-50 hover:text-gray-900"
              }`}
              onClick={() => setActivePage("users")}
            >
              <Users className="w-4 h-4 mr-3" />
              Workers
            </button>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              TOOLS
            </p>
            <div className="space-y-1">
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                  activePage === "goals"
                    ? "bg-gray-100 text-gray-900"
                    : "text-white hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setActivePage("goals")}
              >
                <Target className="w-4 h-4 mr-3" />
                Goals
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                  activePage === "calendar"
                    ? "bg-gray-100 text-gray-900"
                    : "text-white hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setActivePage("calendar")}
              >
                <Calendar className="w-4 h-4 mr-3" />
                Calendar
              </button>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left ${
                  activePage === "settings"
                    ? "bg-gray-100 text-gray-900"
                    : "text-white hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setActivePage("settings")}
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-black/90 px-6 py-4 ml-64">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">
                {activePage === "dashboard"
                  ? "Hi, User!"
                  : activePage.charAt(0).toUpperCase() + activePage.slice(1)}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-md">
                <User className="w-4 h-4" onClick={() => setActivePage("account")} />
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 p-6 min-h-screen ml-64 overflow-auto bg-black/90">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
