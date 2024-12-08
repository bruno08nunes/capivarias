import express from "express";

// Controllers
import { createComment, readComment, readComments, readUserComments } from "../controllers/commentsControllers";

// Validations
import { validationComments } from './../validations/validationComment';

// Routes
const router = express.Router();

router.post("/post", validationComments, createComment);

router.get("/all/:post", readComments);

router.get("/data/:id", readComment);

router.get("/user/:user", readUserComments)

export default router;
