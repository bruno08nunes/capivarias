import express from "express";

// Controllers
import { createComment, readComment, readComments } from "../controllers/commentsControllers";

// Validations
import { validationComments } from './../validations/validationComment';

// Routes
const router = express.Router();

router.post("/post", validationComments, createComment);

router.get("/all/:post", readComments);

router.get("/data/:id", readComment);

export default router;
