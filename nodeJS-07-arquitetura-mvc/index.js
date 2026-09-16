// Importando o framework Express ( ES6 )
import express from "express";
const rota = express.Router();
const app = express(); // Instância
// router() : método do express que cria um objeto de roteamento para gerenciar as rotas da aplicação
//Index.js Arquivo principal do back-end

// Configurações do Express

app.set("view engine", "ejs");
//Configurar a pasta 'PUBLIC' para arquivos estáticos como CSS e JavaScripts
app.use(express.static("public"));
// Página principal
app.get("/", (req, res) => {
  res.render("index");
});

// Importando os controladores
// Referência de diretórios:
// .\ -> pasta atual
// ..\ -> pasta anterior
// :\ -> raiz do projeto

import clienteController from "./controllers/ClienteController.js";
import produtoController from "./controllers/ProdutoController.js";
import servicoController from "./controllers/ServicoController.js";
import usuarioController from "./controllers/UsuarioController.js";

// Configurando as rotas
app.use(clienteController); // Configurando o controlador de clientes
app.use(produtoController); // Configurando o controlador de produtos
app.use(servicoController); // Configurando o controlador de serviços
app.use(usuarioController); // Configurando o controlador de usuários

//Iniciar servidor na porta 8080
const port = 8080;

// Proteção contra erros
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
