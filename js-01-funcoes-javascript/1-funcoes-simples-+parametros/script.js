
//Função simples
function showMessage() {
  const message = "<h2>Olá, bem-vindo</h2>";
  document.writeln(message);
}
//Invocando a função
showMessage();

//Função com parâmetro / argumento
const user = "Julio Cesar";

//Função com parâmetro
function userMessage(user) {
  document.writeln(`<h3>O que deseja fazer hoje,  ${user} </h3>`);
}

// Invocando a função passando um argumento
userMessage(user);

//Função com mais de um parâmetro
const n1 = 10;
const n2 = 5;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.writeln(`A soma de ${n1} + ${n2} é igual a ${resultado}.`);
}

soma(n1, n2);
