import { validationResult } from "express-validator";
import { Request, Response } from "express";
import connection from "../db_config";

export const registerUser = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.array()[0].msg,
            success: false,
            data: errors.array()
        });
    }

    const params = [
        req.body.username,
        req.body.capyCode,
        req.body.email,
        req.body.password,
        req.body.birthday,
    ];

    const query = "INSERT INTO users(username, capy_code, email, password, birthday) VALUES (?, ?, ?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Erro ao cadastrar usuário",
                data: err
            });
            return;
        }
        res.status(201).json({
            success: true,
            message: "Usuário cadastrado",
            data: results
        });
    });
}

export const loginUser = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.array()[0].msg,
            success: false,
            data: errors.array()
        });
    }

    const params = [req.body.email];

    const query = "SELECT * FROM users WHERE email = ?;";

    connection.query(query, params, (err, results) => {
        const tempResults: any = results;
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao encontrar usuário",
                data: err
            });
        }
        if (tempResults.length > 0) {
            if (tempResults[0].password === req.body.password) {
                return res.status(200).json({
                    success: true,
                    message: "Consulta concluída",
                    data: results
                });
            }
            return res.status(400).json({
                success: false,
                message: "Senha inválida",
                data: {}
            });
        }
        return res.status(400).json({
            success: false,
            message: "Usuário não cadastrado",
            data: {}
        });
    });
}

export const readUserData = (req: Request, res: Response) => {
    const params = [req.params.id, req.params.id];
    const query = `
        SELECT username, capy_code, birthday, bio, profile_picture, role, is_private, is_active, created_at,
            (SELECT COUNT(*) FROM follows WHERE following = users.id) AS followers,
            (SELECT COUNT(*) FROM follows WHERE follower = users.id) AS following
        FROM users
        WHERE users.id = ? or users.capy_code = ?;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao pegar dados de usuário",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Informações consultadas",
            data: results
        });
    })
}

export const readUserPosts = (req: Request, res: Response) => {
    const params = [req.query.user, req.params.user, req.params.user];

    const query = `
        SELECT posts.*, users.username, users.capy_code, users.profile_picture, count(amazings.post_id),
        EXISTS (
		        SELECT 1 
		        FROM amazings 
		        WHERE amazings.post_id = posts.id AND amazings.user_id = ?
        ) AS is_amazing
        FROM posts
        INNER JOIN users
        ON users.id = posts.user_id
        LEFT JOIN amazings
        ON posts.id = amazings.post_id
        WHERE posts.user_id = ? OR users.capy_code = ?
        GROUP BY posts.id
        ORDER BY posts.updated_at DESC;
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
}