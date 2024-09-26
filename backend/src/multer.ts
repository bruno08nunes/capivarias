import multer from "multer";
import path from "path";

const postStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/posts");
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${crypto.randomUUID()}-${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/users");
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${crypto.randomUUID()}-${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});


export const uploadPost = multer({storage: postStorage});

export const uploadUsers = multer({storage: userStorage});