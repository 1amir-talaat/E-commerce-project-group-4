// users.js
import express from "express";
import { getAllUsers, Register, Login } from "../controllers/users.js";

import { authenticateMiddleware } from "../middleware/authenticateMiddleware.js";

const router = express.Router();

router.get("/users", authenticateMiddleware, getAllUsers);
router.post("/users", Register);
router.post("/login", Login);

export default router;
