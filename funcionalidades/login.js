// login.js
const { usuarios } = require('../database');

function fazerLogin(nome, senha) {
    // Verifica se o usuário existe e a senha está correta
    const usuario = usuarios.find(user => user.nome === nome && user.senha === senha);
    if (usuario) {
        return "Login realizado com sucesso!";
    }
    return "Erro: Nome de usuário ou senha incorretos!";
}

module.exports = fazerLogin;