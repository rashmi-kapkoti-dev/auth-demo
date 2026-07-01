import AppRouter from "./routes";
import { AuthProvider } from "./auth/AuthProvider";
import "./style.css";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
export default App;
