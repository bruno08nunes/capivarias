import { body } from "express-validator";

export const validationComments = [
    body("user_id").isNumeric().withMessage("Usuário inválido"),
    body("post_id").isNumeric().withMessage("Post inválido"),
    body("content")
        .isLength({ max: 220 })
        .withMessage("O quantidade máxima de caracteres é 220")
];