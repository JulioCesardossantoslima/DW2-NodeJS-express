import express from "express";
const rota = express.Router();

// Página clientes

rota.get("/clientes", (req, res) => {
  const clientes = [
    { nomes: "Diego Max", cpf: "999.999.999-99" },
    { nomes: "Gregory Souza", cpf: "888.888.888-88" },
    { nomes: "Laura Júlia", cpf: "777.777.777-77" },
    { nomes: "Mario Takahashi", cpf: "666.666.666-66" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

export default rota;