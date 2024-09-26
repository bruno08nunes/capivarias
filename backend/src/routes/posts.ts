import express, { Request, Response } from "express";
import connection from "../db_config";
import { body, validationResult } from "express-validator";

const router = express.Router();

const validationPost = [
    body("user_id").isNumeric().withMessage("Usuário inválido"),
    body("content").isLength({max: 220}).withMessage("O quantidade máxima de caracteres é 220"),
    body("is_private").isBoolean().withMessage("Propriedade private inválida"),
];

router.post("/posts/post", validationPost, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Informações Inválidas",
            success: false,
            data: errors.array()
        });
    }

    const params = [
        req.body.user_id,
        req.body.content,
        req.body.is_private
    ];

    const query = "INSERT INTO posts(user_id, content, is_private) VALUES(?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao postar",
                data: err
            });
        }
        return res.status(201).json({
            success: true,
            message: "Post enviado",
            data: results
        });
    });
});

router.get("/posts/all", (req, res) => {
    const query = "SELECT * FROM posts;";

    connection.query(query, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao pegar dados do post",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results
        });
    });
});

router.get("/posts/data/:id", (req, res) => {
    const params = [req.params.id];
    const query = "SELECT * FROM posts WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao pegar dados do post",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results
        });
    });
});

router.get("/users/posts/:user", (req, res) => {
    const params = [req.params.user];
    const query = "SELECT * FROM posts WHERE user_id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao pegar dados do post",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results
        });
    });
});

export default router;