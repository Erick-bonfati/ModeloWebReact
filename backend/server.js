import 'dotenv/config'

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express();
app.use(cors()); // Cors permite o React acessar o servidor
app.use(express.json()) // entende JSON no body das requisições

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB conectado"))
.catch(err => console.error("Erro ao conectar no MongoDB:", err))

app.use("/api", usuarioRoutes)

app.get("/api/mensagem", (req, res) => {
  res.json({texto: "Olá, sou o backend!"})
})


app.listen(5000, () => console.log("Servidor rodando em http://localhost:5000"))