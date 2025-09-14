const GoalsPage = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">Current Goals</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Increase Monthly Revenue</h3>
              <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded-full">
                In Progress
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Target: $10,000 by end of month
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">65% complete</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Grow User Base</h3>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                Planning
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Target: 1,000 active workers
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">25% complete</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GoalsPage;