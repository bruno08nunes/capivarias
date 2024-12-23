import { Request, Response } from "express";
import connection from "../db_config";
import { validationResult } from "express-validator";

export const createComment = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Informações Inválidas",
            success: false,
            data: errors.array(),
        });
    }

    const params = [req.body.user_id, req.body.post_id, req.body.content];

    const query =
        "INSERT INTO comments(user_id, post_id, content) VALUES(?, ?, ?);";

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

export const readComments = (req: Request, res: Response) => {
    const params = [
        req.query.user,
        req.params.post,
    ];

    const query = `
        SELECT comments.*, users.username, users.capy_code, users.profile_picture,
        EXISTS (
		        SELECT 1 
		        FROM amazings_comments 
		        WHERE amazings_comments.comment_id = comments.id AND amazings_comments.user_id = ?
	    ) AS is_amazing
        FROM comments
        INNER JOIN users
        ON users.id = comments.user_id
        WHERE comments.post_id = ?;
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

export const readComment = (req: Request, res: Response) => {
    const params = [req.params.id];
    const query = "SELECT * FROM comments WHERE id = ?;";

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

export const readUserComments = (req: Request, res: Response) => {
    const params = [req.query.user, req.params.user];
    const query = `
        SELECT
            comments.*,users.username, users.capy_code, users.profile_picture,
            EXISTS (
		        SELECT 1 
		        FROM amazings_comments 
		        WHERE amazings_comments.comment_id = comments.id AND amazings_comments.user_id = ?
	        ) AS is_amazing
        FROM comments
        INNER JOIN users
        ON users.id = comments.user_id
        WHERE users.capy_code = ?
        ORDER BY comments.updated_at DESC;`;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao pegar comentários",
                data: err,
            });
        }
        res.status(200).json({
            success: true,
            message: "Comentários pegos",
            data: results,
        });
    });
}