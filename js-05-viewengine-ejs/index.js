const express = require("express"); //Forma classica
const app = express() // Instância 

app.set('view engine', 'ejs')

// Página principal
app.get("/", (req, res) => {
  res.render('index');

})

// Página clientes
app.get("/clientes", (req, res) =>{
  const clientes = [
    {nomes:"Diego Max", cpf:"999.999.999-99"},
    {nomes:"Gregory Souza", cpf:"888.888.888-88"},
    {nomes:"Laura Júlia", cpf:"777.777.777-77"},
    {nomes:"Mario Takahashi", cpf:"666.666.666-66"},
  ]
  res.render('clientes',{ 
    clientes: clientes,});
})

// Página produtos
app.get("/produtos", (req, res) =>{
  // Lista de produtos ( dados mockados )
  // Futurament e os dados virão do banco de dados
  // Array de objetos
  const produtos = [
    {nome:"Computador", marca:"Lenovo", preco: 3500},
    {nome:"Celular", marca:"Samsung", preco: 4000},
    {nome:"Notebook", marca:"Dell", preco: 5100},
    {nome:"Tablet", marca:"Asus", preco: 2400},
  ];

  res.render('produtos', {
      // Enviando a lista de produtos para a página
      produtos: produtos,
});
}
)

// Página perfil
app.get("/perfil", (req, res) =>{
  res.render('perfil');
})

// Página serviços
app.get("/servicos", (req, res) =>{
  res.render('servicos');
})

//Iniciar servidor na porta 8080
const port = 8080;

// Proteção contra erros
app.listen(port, (error) =>{

  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

