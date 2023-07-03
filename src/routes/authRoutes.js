import  express from "express";
import { createUser } from "../controllers/authController.js";

// login signup forget email verification etc.

const authRoutes = express.Router();

authRoutes.post('/register',createUser)

export default authRoutes
