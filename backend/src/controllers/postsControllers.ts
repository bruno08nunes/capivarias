import { Request, Response } from "express";
import connection from "../db_config";
import { validationResult } from "express-validator";

export const createPost = (req: Request, res: Response) => {
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
            return res.status(500).json({
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
};

export const readPosts = (req: Request, res: Response) => {
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
            return res.status(500).json({
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
};

export const readPost = (req: Request, res: Response) => {
    const params = [req.params.id];
    const query = "SELECT * FROM posts WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
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
};

// Medias

export const createMedias = (req: Request, res: Response) => {
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
};

export const readMedias = (req: Request, res: Response) => {
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
}