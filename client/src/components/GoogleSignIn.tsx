import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../services/auth.service";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        if (!credentialResponse.credential) return;
        try {
          const response = await googleLogin(credentialResponse.credential);
          if (response.data.success) {
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
