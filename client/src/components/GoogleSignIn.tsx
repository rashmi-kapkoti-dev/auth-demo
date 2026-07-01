import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../api/auth.api";
import { useAuth } from "../hooks/useAuth";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        if (!credentialResponse.credential) return;

        try {
          const response = await loginWithGoogle(credentialResponse.credential);
          if (response.data.success) {
            await login();
            navigate("/dashboard");
          }
        } catch {
          console.log("Login Failed");
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleSignIn;
