import express from "express";
const rota = express.Router();

// Página serviços

rota.get("/servicos", (req, res) => {
  res.render("servicos");
});

export default rota;