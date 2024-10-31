import express, { Request, Response } from "express";
import connection from "../db_config";
import { body, validationResult } from "express-validator";

const router = express.Router();

const validationRegister = [
    body("username").isLength({min: 3, max: 50}).withMessage("O nome do usuário deve ter entre 3 e 50 caracteres"),
    body("capyCode").isLength({min: 5, max: 30}).withMessage("O Capy Code deve ter entre 5 e 30 caracteres"),
    body("email").isEmail().withMessage("Insira um email válido"),
    body("password").isLength({min: 8, max: 25}).withMessage("A senha deve ter entre 8 e 25 caracteres"),
    body("birthday").isDate({format: "YYYY-MM-DD"}).withMessage("Data inválida").bail().custom((value) => {
        const now = new Date();
        const birthday = new Date(value);
        let age = now.getFullYear() - birthday.getFullYear();
        const monthDiff = now.getMonth() - birthday.getMonth();
        const beforeBirthday = now.getDate() < birthday.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && beforeBirthday)) {
            age--;
        }
        return age >= 2;
    }).withMessage("Você precisa ter ao menos 2 anos para se registrar")
];

router.post("/users/register", validationRegister, (req: Request, res: Response) => {
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
            res.status(400).json({
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
});

const validationLogin = [
    body("email").isEmail().withMessage("Insira um email válido"),
    body("password").isLength({min: 8, max: 25}).withMessage("A senha deve ter entre 8 e 25 caracteres"),
];

router.post("/users/login", validationLogin, (req: Request, res: Response) => {
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
            return res.status(400).json({
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
});

router.get("/users/data/:id", (req, res) => {
    const params = [req.params.id];
    const query = "SELECT username, capy_code, birthday, bio, profile_picture, role, is_private, is_active, created_at FROM users WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(400).json({
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
});

export default router;