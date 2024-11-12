import express from "express";

// Controllers
import { readUserData, readUserPosts, loginUser, registerUser } from "../controllers/userControllers";

// Validations
import { validationRegister, validationLogin } from "../validations/validationUser";

const router = express.Router();

router.post("/register", validationRegister, registerUser);

router.post("/login", validationLogin, loginUser);

router.get("/data/:id", readUserData);

router.get("/posts/:user", readUserPosts);

export default router;