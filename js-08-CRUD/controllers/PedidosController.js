import express from "express";
import Pedido from "../models/Pedido.js";
const rota = express.Router();

rota.get("/pedidos", (req, res) => {
  // Selecionando todos os clientes do banco de dados
  Pedido.findAll()
    .then((pedidos) => {
      // Enviando a lista de clientes para a página HTML
      res.render("pedidos", {
        pedidos: pedidos,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar os clientes. Erro ${error}`)
    );
});
export default rota;
