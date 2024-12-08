import express from "express";
import { amazingComment, amazingPost, desAmazingComment, desAmazingPost, readUserAmazings } from "../controllers/amazingsControllers";

const router = express.Router();

router.post("/post/amazing", amazingPost);

router.delete("/post/amazing", desAmazingPost);

router.post("/post/comments/amazing", amazingComment);

router.delete("/post/comments/amazing", desAmazingComment);

router.get("/user/amazings/:user", readUserAmazings);

export default router;