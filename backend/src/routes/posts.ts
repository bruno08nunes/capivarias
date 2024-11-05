import express, { Request, Response } from "express";
import connection from "../db_config";
import { body, validationResult } from "express-validator";

const router = express.Router();

const validationPost = [
    body("user_id").isNumeric().withMessage("Usuário inválido"),
    body("content")
        .isLength({ max: 220 })
        .withMessage("O quantidade máxima de caracteres é 220"),
    body("is_private").isBoolean().withMessage("Propriedade private inválida"),
];

router.post("/posts/post", validationPost, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Informações Inválidas",
            success: false,
            data: errors.array(),
        });
    }

    const params = [req.body.user_id, req.body.content, req.body.is_private];

    const query =
        "INSERT INTO posts(user_id, content, is_private) VALUES(?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao postar",
                data: err,
            });
        }
        return res.status(201).json({
            success: true,
            message: "Post enviado",
            data: results,
        });
    });
});

router.get("/posts/all", (req, res) => {
    const params = [
        req.query.user
    ];

    const query = `
        SELECT posts.*, users.username, users.capy_code, users.profile_picture,
        CASE
            WHEN MAX(amazings.user_id) = ? THEN true
            ELSE false
            END AS is_amazing
        FROM posts
        INNER JOIN users
        ON users.id = posts.user_id
        LEFT JOIN amazings
        ON posts.id = amazings.post_id
        GROUP BY posts.id;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao pegar dados do post",
                data: err,
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results,
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
                data: err,
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results,
        });
    });
});

router.get("/users/posts/:user", (req, res) => {
    const params = [req.query.user, req.params.user, req.params.user];
    const query = `
        SELECT posts.*, users.username, users.capy_code, users.profile_picture, count(amazings.post_id),
        CASE
            WHEN MAX(amazings.user_id) = ? THEN true
            ELSE false
            END AS is_amazing
        FROM posts
        INNER JOIN users
        ON users.id = posts.user_id
        LEFT JOIN amazings
        ON posts.id = amazings.post_id
        WHERE posts.user_id = ? OR users.capy_code = ?
        GROUP BY posts.id;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao pegar dados do post",
                data: err,
            });
        }
        res.status(200).json({
            success: true,
            message: "Dados pegos",
            data: results,
        });
    });
});

router.post("/post/amazing", (req, res) => {
    const params = [req.body.post, req.body.user];
    const query = `
        INSERT INTO amazings(post_id, user_id) VALUES (?, ?);
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao adicionar amazing no post",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Amazing concluído",
            data: results
        });
    });
});

router.delete("/post/amazing", (req, res) => {
    const params = [req.body.post, req.body.user];
    const query = `
        DELETE FROM amazings WHERE post_id = ? AND user_id = ?;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao remover amazing no post",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Amazing deletado",
            data: results
        });
    });
});

router.post("/post/comments/amazing", (req, res) => {
    const params = [req.body.post, req.body.user];
    const query = `
        INSERT INTO amazings(post_id, user_id) VALUES (?, ?);
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao adicionar amazing no post",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Amazing concluído",
            data: results
        });
    });
});

router.delete("/post/amazing", (req, res) => {
    const params = [req.body.post, req.body.user];
    const query = `
        DELETE FROM amazings WHERE post_id = ? AND user_id = ?;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Erro ao remover amazing no post",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Amazing deletado",
            data: results
        });
    });
});

export default router;
