import express from "express";
import Cliente from "../models/Cliente.js";
const rota = express.Router();

// Página clientes

rota.get("/clientes", (req, res) => {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll()
    .then((clientes) => {
      // Enviando a lista de clientes para a página HTML
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar os clientes. Erro ${error}`)
    );
});

// Rota de cadastro de clientes
rota.post("/clientes/cadastrar", (req, res) =>{
  // Capturando os dados vindo do formulario e gravando nas variáveis
  const nome = req.body.nome;
  const CPF = req.body.cpf;
  const endereco = req.body.endereco;

  // Chamando o model para gravar os dados no banco de dados
  // Cliente.create = equivalente ao INSERT INTO do mySQL
  Cliente.create({
    // Nome da coluna : variável no banco
    nome: nome,
    cpf: CPF,
    endereco: endereco
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(`Ocorreu um erro ao cadastrar o cliente. Erro ${error}`)
  });
});
export default rota;