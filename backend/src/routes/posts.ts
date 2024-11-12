import express from "express";
import { uploadPost } from "../multer";

// Controllers
import { createMedias, createPost, readMedias, readPost, readPosts } from "../controllers/postsControllers";

// Validations
import { validationPost } from "../validations/validationPost";

// Routes
const router = express.Router();

router.post("/post", validationPost, createPost);

router.get("/all", readPosts);

router.get("/data/:id", readPost);

// Medias
router.post("/media/post", uploadPost.array("files"), createMedias);

router.get("/media/get/:post", readMedias);

export default router;
