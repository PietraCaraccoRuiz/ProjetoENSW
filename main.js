// index.js
const cadastrarUsuario = require('./funcionalidades/cadastro');
const fazerLogin = require('./funcionalidades/login');

console.log(cadastrarUsuario("usuario1", "senha123")); // Cadastra um usuário
console.log(cadastrarUsuario("usuario1", "senha123")); // Tenta cadastrar o mesmo usuário
console.log(fazerLogin("usuario1", "senha123")); // Login bem-sucedido
console.log(fazerLogin("usuario1", "senhaErrada")); // Login com senha incorreta
console.log(fazerLogin("usuarioInexistente", "senha123")); // Tentativa de login com usuário inexistente