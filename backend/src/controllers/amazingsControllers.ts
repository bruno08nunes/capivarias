import { Request, Response } from "express";
import connection from "../db_config";

export const amazingPost = (req: Request, res: Response) => {
    const params = [req.body.post, req.body.user];
    const query = `
        INSERT INTO amazings(post_id, user_id) VALUES (?, ?);
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
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
};

export const desAmazingPost = (req: Request, res: Response) => {
    const params = [req.body.post, req.body.user];
    const query = `
        DELETE FROM amazings WHERE post_id = ? AND user_id = ?;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao remover amazing no post",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Amazing deletado",
            data: results
        });
    });
};

export const amazingComment = (req: Request, res: Response) => {
    const params = [req.body.post, req.body.user];
    const query = `
        INSERT INTO amazings_comments(comment_id, user_id) VALUES (?, ?);
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao adicionar amazing no comentário",
                data: err
            });
        }
        res.status(201).json({
            success: true,
            message: "Amazing concluído",
            data: results
        });
    });
};

export const desAmazingComment = (req: Request, res: Response) => {
    const params = [req.body.post, req.body.user];
    const query = `
        DELETE FROM amazings_comments WHERE comment_id = ? AND user_id = ?;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao remover amazing no post",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Amazing deletado",
            data: results
        });
    });
}

export const readUserAmazings = (req: Request, res: Response) => {
    const params = [req.query.user, req.params.user, req.query.user, req.params.user];
    const query = `
        (
    SELECT 
        ac.user_id,
        concat(ac.comment_id, "c") AS id,
        comments.post_id AS post_id,
        'comment' AS type,
        ac.created_at AS amazing_at,
        EXISTS (
		        SELECT 1 
		        FROM amazings_comments 
		        WHERE amazings_comments.comment_id = comments.id AND amazings_comments.user_id = ?
	    ) AS is_amazing,
        comments.content AS content,
        comments.created_at,
        users.username,
        users.capy_code,
        users.profile_picture
    FROM 
        amazings_comments ac
    JOIN 
        comments ON comments.id = ac.comment_id
    JOIN 
        users ON users.id = comments.user_id
    WHERE 
        ac.user_id = (SELECT id FROM users WHERE capy_code = ?)
)
UNION
(
    SELECT 
        a.user_id,
        a.post_id AS id,
        a.post_id AS post_id,
        'post' AS type,
        a.created_at AS amazing_at,
        EXISTS (
		        SELECT 1 
		        FROM amazings 
		        WHERE amazings.post_id = posts.id AND amazings.user_id = ?
        ) AS is_amazing,
        posts.content,
        posts.created_at,
        users.username,
        users.capy_code,
        users.profile_picture
    FROM 
        amazings a
    JOIN 
        posts ON posts.id = a.post_id
    JOIN 
        users ON users.id = posts.user_id
    WHERE 
        a.user_id = (SELECT id FROM users WHERE capy_code = ?)
)
ORDER BY amazing_at DESC;
    `;

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao consultar curtidas",
                data: err
            });
        }
        res.status(200).json({
            success: true,
            message: "Curtidas verificadas",
            data: results
        });
    });
}