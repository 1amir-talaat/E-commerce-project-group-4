// users.js
import express from "express";
import { getAllUsers, Register, Login } from "../controllers/users.js";
import { getAllProducts, createProduct } from "../controllers/products.js";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cart.js";

import { authenticateMiddleware } from "../middleware/authenticateMiddleware.js";

const router = express.Router();

router.get("/users", authenticateMiddleware, getAllUsers);
router.post("/users", Register);
router.post("/login", Login);

router.get("/products", getAllProducts);
router.post("/products", authenticateMiddleware, createProduct);

router.post("/cart/add", addToCart);
router.get("/cart/items", getCartItems);
router.delete("/cart/remove/:cartItemId", removeFromCart);

export default router;
