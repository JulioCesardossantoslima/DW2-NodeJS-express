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

export default rota;
