import { body } from "express-validator";

export const validationRegister = [
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

export const validationLogin = [
    body("email").isEmail().withMessage("Insira um email válido"),
    body("password").isLength({min: 8, max: 25}).withMessage("A senha deve ter entre 8 e 25 caracteres"),
];