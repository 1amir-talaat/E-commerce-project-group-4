// users.js
import express from "express";
import { getAllUsers, Register, Login } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token");

export default router;
