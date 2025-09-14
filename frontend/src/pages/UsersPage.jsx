import { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Mike Brown",
      email: "mike@example.com",
      status: "Active",
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;

    const user = {
      id: Date.now(),
      ...newUser,
    };

    setUsers((prev) => [...prev, user]);

    setNewUser({
      name: "",
      email: "",
      status: "Active",
    });
  };

  return (
    <div className="space-y-6">
      {/* Add Worker Form */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Add Worker</h3>
        </div>
        <div className="p-6 space-y-4">
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="status"
            value={newUser.status}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            onClick={addUser}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Worker
          </button>
        </div>
      </div>

      {/* User List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">User Management</h3>
        </div>
        <div className="p-6 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  user.status === "Active"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
