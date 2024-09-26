import express from "express";
import "dotenv/config";
import cors from "cors";

import users from "./routes/users";
import posts from "./routes/posts";
import postsMedias from "./routes/medias";

const app = express();

app.use(express.json());
app.use(cors());

const port = Number(process.env.PORT);

app.listen(port, () => console.log(`Rodando na porta ${port}`));

app.use("/", users);
app.use("/", posts);
app.use("/", postsMedias);
