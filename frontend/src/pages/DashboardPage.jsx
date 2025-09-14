import { useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  FileText,
  Zap,
  Plus,
} from "lucide-react";
import PredictionPage from "./PredictionPage";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review analytics report", completed: false },
    { id: 2, text: "Update dashboard", completed: true },
    { id: 3, text: "Schedule team meeting", completed: false },
      { id: 1, text: "Review analytics report", completed: false },
    { id: 2, text: "Update dashboard", completed: true },
    { id: 3, text: "Schedule team meeting", completed: false },
      { id: 1, text: "Review analytics report", completed: false },
    { id: 2, text: "Update dashboard", completed: true },
    { id: 3, text: "Schedule team meeting", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="w-full bg-white/95 rounded-2xl mb-5 p-4">
        <PredictionPage/>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-black rounded-lg border shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-800">Total subscribers</p>
                  <p className="text-2xl font-bold">43</p>
                </div>
                <div className="text-green-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Workers</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div className="text-blue-500">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold">$0</p>
                </div>
                <div className="text-green-500">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Top Stats Row */}
        <div className="col-span-8">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white text-black rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-800">Total subscribers</p>
                    <p className="text-2xl font-bold">43</p>
                  </div>
                  <div className="text-green-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Workers</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <div className="text-blue-500">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold">$0</p>
                  </div>
                  <div className="text-green-500">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg border shadow-sm mb-6">
            <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold">Weekly overview</h3>
            </div>
            <div className="p-6">
              <div className="h-64 flex items-end justify-between px-4">
                {/* Simple line chart representation */}
                <div className="flex items-end space-x-2 w-full h-full">
                  <div className="bg-gray-200 w-8 h-16 rounded-t"></div>
                  <div className="bg-gray-200 w-8 h-24 rounded-t"></div>
                  <div className="bg-gray-200 w-8 h-32 rounded-t"></div>
                  <div className="bg-blue-500 w-8 h-40 rounded-t"></div>
                  <div className="bg-gray-200 w-8 h-28 rounded-t"></div>
                  <div className="bg-gray-200 w-8 h-36 rounded-t"></div>
                  <div className="bg-gray-200 w-8 h-20 rounded-t"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4">
          {/* Circular Progress */}
          <div className="bg-white rounded-lg border shadow-sm mb-6">
            <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            <div className="px-6 max-h-64 overflow-auto scrollbar-hide">
              {tasks.map((task, index)=>(
                <div key={index} className="flex items-center justify-between space-y-4">
                  <span className="text-sm">{task.text}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    In Progress
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="px-6 max-h-24 overflow-auto scrollbar-hide">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment received</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Report generated</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-4">
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold">Recent Goals</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Increase subscribers</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Launch new feature</span>
                  <span className="px-2 py-1 text-xs font-medium border border-gray-300 text-gray-700 rounded-full">
                    Pending
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Improve conversion</span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
            <div className="bg-white rounded-lg border shadow-sm max-h-52 overflow-auto scrollbar-hide">
              <div className="p-6 pb-2">
                <h3 className="text-lg font-semibold">Task Management</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                      />
                      <span
                        className={`text-sm ${
                          task.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                  ))}
                  <button className="w-full mt-3 px-3 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </button>
                </div>
              </div>
            </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-black text-white rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Active Projects</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Completed Tasks</p>
                    <p className="text-xl font-bold">89</p>
                  </div>
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Team Members</p>
                    <p className="text-xl font-bold">24</p>
                  </div>
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;