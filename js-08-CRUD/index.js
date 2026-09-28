// Importando o framework Express ( ES6 )
import express from "express";
const rota = express.Router();
const app = express(); // Instância
// router() : método do express que cria um objeto de roteamento para gerenciar as rotas da aplicação
//Index.js Arquivo principal do back-end

import connection from './config/sequelize-config.js' 
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados foi realizada com sucesso!")
}).catch((error) => {
  console.log(`Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error}`)
});

// Criando o banco de dados se ele não existir
const DB_NAME = "loja";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`).then(() => {
  console.log(`O banco de dados ${DB_NAME} está criado!`)
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar banco de dados ${DB_NAME}, Erro: ${error}`)
});


//Configurando o express para permitir dados através de formlários
app.use(express.urlencoded({ extended: false}));

// Importando os controladores
// Referência de diretórios:
// .\ -> pasta atual
// ..\ -> pasta anterior
// :\ -> raiz do projeto

import clienteController from "./controllers/ClienteController.js";
import produtoController from "./controllers/ProdutoController.js";
import pedidosController from "./controllers/PedidosController.js";

// Importando os Models
import Cliente from "./models/Cliente.js";
import Produto from "./models/Pedido.js";



// Configurando as rotas
app.use(clienteController); // Configurando o controlador de clientes
app.use(produtoController); // Configurando o controlador de produtos
app.use(pedidosController); // Configurando o controlador de pedidos

// Configurações do Express
app.set("view engine", "ejs");
//Configurar a pasta 'PUBLIC' para arquivos estáticos como CSS e JavaScripts
app.use(express.static("public"));
// Página principal
app.get("/", (req, res) => {
  res.render("index");
});

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

