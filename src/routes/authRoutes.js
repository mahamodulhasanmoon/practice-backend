import  express from "express";
import { createUser } from "../controllers/authController.js";

// login signup forget email verification etc.

const authRoutes = express.Router();

authRoutes.get('/register',createUser)

export default authRoutes
