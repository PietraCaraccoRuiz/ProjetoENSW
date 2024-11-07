// cadastro.js
const { usuarios } = require('../database');

function cadastrarUsuario(nome, senha) {
    // Verifica se o usuário já existe
    const usuarioExistente = usuarios.find(user => user.nome === nome);
    if (usuarioExistente) {
        return "Erro: Usuário já cadastrado!";
    }

    // Cadastra um novo usuário
    usuarios.push({ nome, senha });
    return "Usuário cadastrado com sucesso!";
}

module.exports = cadastrarUsuario;