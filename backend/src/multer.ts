import multer from "multer";
import path from "path";

const postStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/posts");
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${crypto.randomUUID()}-${path.extname(
            file.originalname
        )}`;
        cb(null, fileName);
    },
});

const filesAccepted = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/avif",
    "image/gif",
    "image/svg+xml",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "application/pdf",
];

export const uploadPost = multer({
    storage: postStorage,
    fileFilter: (req, file, cb) => {
        if (!filesAccepted.includes(file.mimetype)) {
            return cb(null, false);
        }
        cb(null, true);
    },
});

const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/users");
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${crypto.randomUUID()}-${path.extname(
            file.originalname
        )}`;
        cb(null, fileName);
    },
});

export const uploadUsers = multer({ storage: userStorage });
