import { api } from "./api"

export async function pegaMensagem() {
  const res = await api.get("/mensagem");
  return res.data;
}

export async function loginUsuario(usuario, senha) {
  try {
    const resposta = await api.post("/login", { usuario, senha })
    return resposta.data
  } catch (error) {
    if (error.response) return error.response.data
    return { sucesso: false, erro: "Erro de conexão com o servidor" }
  }
}

export async function cadastraUsuario(usuario, senha) {
  try {
    const resposta = await api.post("/registrar", { usuario, senha })
    return resposta.data 
  } catch (error) {
    if (error.response) return error.response.data
    return { sucesso: false, erro: "Erro de conexão com o servidor" }
  }
}