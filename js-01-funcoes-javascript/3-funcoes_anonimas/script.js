const mult = function (x) {
  return x * 2;
};
const x = 15;

document.writeln(`<p>O resultado da multiplicação é ${mult(x)}`);

/* Função SETA - ARROW FUNCTION - se sua função apenas tiver um único parâmetro  voce pode remover os parenteses (y) -> y */
const triplo = (y) => {
  return y * 3;
};

const y = 100;
document.writeln(`<p>O triplo de ${y} é ${triplo(y)}`);

// Função SETA - com mais de um parâmetro//
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

//EVAL é uma função nativa do Javascript que realiza cálculos matemáticos a partir de dois números e um operador. (não recomendavel)

const num1 = 8;
const num2 = 2;
const operador = "-";
document.writeln(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`,
);

// FUNÇÃO IMEDIATA (IIFE - Immediately Invoked Function Expression)
const imediata = (function () {
  document.writeln("<p>Estou sendo executada imediatamente!</p>");
})(); // passando os parâmetros

//FUNÇÃO IMEDIATA - COM PARÂMETROS
const loaduser = (function (user) {
  document.writeln(
    `<p> Carregando as informações do usuário: <strong>${user}</strong>...`,
  );

  setTimeout(() => {
    document.writeln(`
            Nome:Julio Cesar <br>
            Idade: 20 anos <br>
            Cidade: Registo <br>
            Hobby: Estudar
        `);
  }, 3000);
})("Julio"); //Passando o parâmetro
