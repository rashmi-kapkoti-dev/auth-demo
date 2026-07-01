import { Navigate } from "react-router-dom";
import GoogleSignIn from "../components/GoogleSignIn";
import Loader from "../components/Loader";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default LoginPage;
