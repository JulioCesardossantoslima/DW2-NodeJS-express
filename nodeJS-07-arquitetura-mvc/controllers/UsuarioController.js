import express from "express";
const rota = express.Router();

// Página perfil

rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

export default rota;