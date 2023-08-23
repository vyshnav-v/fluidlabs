import express from "express";
import verifyToken from "../Middleware/authenticate.js";
import { login, Register } from "../Controllers/UserController.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../Controllers/ProductController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);

router.get("/products", verifyToken, getAllProducts);
router.post("/add-products", verifyToken, createProduct);
router.patch("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);
export default router;
