const AnalyticsPage = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Page Views</h3>
        </div>
        <div className="p-6">
          <div className="text-3xl font-bold">12,543</div>
          <p className="text-sm text-gray-600">+12% from last month</p>
        </div>
      </div>
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Bounce Rate</h3>
        </div>
        <div className="p-6">
          <div className="text-3xl font-bold">34.2%</div>
          <p className="text-sm text-gray-600">-5% from last month</p>
        </div>
      </div>
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Session Duration</h3>
        </div>
        <div className="p-6">
          <div className="text-3xl font-bold">2m 45s</div>
          <p className="text-sm text-gray-600">+8% from last month</p>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">Traffic Sources</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Direct</span>
            <span className="font-semibold">45%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Organic Search</span>
            <span className="font-semibold">32%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Social Media</span>
            <span className="font-semibold">15%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Referral</span>
            <span className="font-semibold">8%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AnalyticsPage;