import { useParams, Link, useNavigate } from "react-router-dom";

export default function UserAccount() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // For now, we'll mock some user data.
  const user = {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">User Account Details</h2>
      <div className="space-y-2">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="mt-4">
        <button onClick={()=> navigate(-1)} className="text-blue-500 hover:underline">
          ← Back to Users
        </button>
      </div>
    </div>
  );
}
