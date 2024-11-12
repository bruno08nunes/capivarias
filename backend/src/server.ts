import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";

// Routes
import users from "./routes/users";
import posts from "./routes/posts";

const app = express();

app.use(express.json());
app.use(cors());

const port = Number(process.env.PORT);

app.listen(port, () => console.log(`Rodando na porta ${port}`));

app.use("/users", users);
app.use("/posts", posts);

app.use("/uploads/posts", express.static(path.join(__dirname, "..", "public", "posts")));
app.use("/uploads/users", express.static(path.join(__dirname, "..", "public", "users")));