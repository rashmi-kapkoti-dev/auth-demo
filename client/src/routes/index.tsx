import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
