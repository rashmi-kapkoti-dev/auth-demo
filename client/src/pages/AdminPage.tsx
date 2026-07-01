import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminPanel } from "../api/admin.api";
import { useAuth } from "../hooks/useAuth";

const AdminPage = () => {
  const { user, logout } = useAuth();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadAdminPanel = async () => {
      const response = await getAdminPanel();
      setMessage(response.data.message);
    };

    loadAdminPanel();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Admin Panel</h1>
        <p>{message}</p>
        <p>Logged in as {user?.name}</p>
        <div className="actions">
          <Link to="/dashboard">Back to Dashboard</Link>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
