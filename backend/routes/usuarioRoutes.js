import express from "express"
import bcrypt from "bcryptjs"
import Usuario from "../models/Usuario.js"

const router = express.Router();

router.post("/registrar", async (req, res) => {
  const { usuario, senha } = req.body

  if (!usuario || !senha) {
    return res.status(400).json({ sucesso: false, erro: "Preencha todos os campos!" })
  }

  const existente = await Usuario.findOne({ usuario })
  if (existente) {
    return res.status(400).json({ sucesso: false, erro: "Usuário já existe!" })
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10)
  const novoUsuario = new Usuario({ usuario, senha: senhaCriptografada })
  await novoUsuario.save()

  return res.status(201).json({ sucesso: true, mensagem: "Usuário criado!" })
})

router.post("/login", async (req, res) => {
  try {
    const { usuario, senha } = req.body

    // Verifica se o usuário existe
    const user = await Usuario.findOne({ usuario })
    if (!user) {
      return res.status(404).json({ sucesso: false, erro: "Usuário não encontrado." })
    }

    // Compara a senha digitada com a salva no banco
    const senhaValida = await bcrypt.compare(senha, user.senha)
    if (!senhaValida) {
      return res.status(401).json({ sucesso: false, erro: "Senha incorreta." })
    }

    // Se chegou aqui, login foi bem-sucedido
    res.json({ sucesso: true, usuario: user.usuario })
  } catch (error) {
    console.error(error)
    res.status(500).json({ sucesso: false, erro: "Erro interno no servidor" })
  }
})

export default router
