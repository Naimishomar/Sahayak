const SettingsPage = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">Account Settings</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Display Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="User"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              defaultValue="user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timezone</label>
            <select className="w-full p-2 border rounded-md">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
            </select>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsPage;