import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>
        <p>Welcome, {user?.name}</p>
        <p>Role: {user?.role}</p>
        <div className="actions">
          {user?.role === "admin" && <Link to="/admin">Admin Panel</Link>}
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
