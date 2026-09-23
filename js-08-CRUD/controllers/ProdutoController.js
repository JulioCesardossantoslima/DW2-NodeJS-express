import express from "express";
const rota = express.Router();
import Produto from "../models/Produto.js";

// Página produtos
rota.get("/produtos", (req, res) => {
  // Selecionando todos os clientes do banco de dados
  Produto.findAll()
    .then((produtos) => {
      // Enviando a lista de clientes para a página HTML
      res.render("produtos", {
        produtos: produtos,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar os clientes. Erro ${error}`)
    );
});

export default rota;
