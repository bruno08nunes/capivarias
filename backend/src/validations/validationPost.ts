import { body } from "express-validator";

export const validationPost = [
    body("user_id").isNumeric().withMessage("Usuário inválido"),
    body("content")
        .isLength({ max: 220 })
        .withMessage("O quantidade máxima de caracteres é 220"),
    body("is_private").isBoolean().withMessage("Propriedade private inválida"),
];