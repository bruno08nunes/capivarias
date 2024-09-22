import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

const port = Number(process.env.PORT);

app.listen(port, () => console.log(`Rodando na porta ${port}`));

app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});