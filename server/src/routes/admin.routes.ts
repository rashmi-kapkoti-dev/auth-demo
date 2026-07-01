import { Router } from "express";
import { getAdminPanel } from "../controllers/admin.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/rbac.middleware.js";

const router = Router();

router.get("/panel", authenticate, authorize("admin"), getAdminPanel);

export default router;
