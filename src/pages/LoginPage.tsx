import GoogleSignIn from "../components/GoogleSignIn";

const LoginPage = () => {
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
