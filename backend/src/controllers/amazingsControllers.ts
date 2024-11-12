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
    const params = [req.body.comment, req.body.user];
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