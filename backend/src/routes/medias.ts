import express, { Request, Response } from "express";
import connection from "../db_config";
import { uploadPost } from "../multer";
import path from "path";

const router = express.Router();

router.post("/posts/media/post", uploadPost.array("files"), (req: Request, res: Response) => {
    if (!Array.isArray(req.files)) {
        return res.status(400).json({
            success: false,
            message: "Arquivos inválidos enviados",
            data: {}
        });
    }

    if (req.files.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Arquivos inválidos enviados",
            data: {}
        });
    }

    const params = req.files.map((file) => [
        req.body.post,
        file.filename
    ]);

    const query = "INSERT INTO posts_medias(post_id, url) VALUES ?;";

    connection.query(query, [params], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao enviar arquivo",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Arquivos enviados",
            data: results
        });
    });
});

router.get("/posts/media/get/:post", (req: Request, res: Response) => {
    const params = [
        req.params.post
    ];

    const query = "SELECT url FROM posts_medias WHERE post_id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao carregar arquivos",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Arquivos carregados",
            data: results
        });
    });
});

router.use("/uploads/posts", express.static(path.join(__dirname, "..", "public", "posts")));
router.use("/uploads/users", express.static(path.join(__dirname, "..", "public", "users")));

export default router;