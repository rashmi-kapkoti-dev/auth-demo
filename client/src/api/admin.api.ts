import api from "./api";

export const getAdminPanel = () => api.get("/admin/panel");
