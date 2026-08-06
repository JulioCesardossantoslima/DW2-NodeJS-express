const n1 = 50;
const n2 = 3;

// função da multiplicação
function multi(n1, n2) {
  return n1 * n2; // -> operador da multiplicação
}

// Exibir o resultado
document.writeln(
  `<p>A multiplicação de ${n1} por ${n2} é igual a <strong>${multi(n1, n2)} </strong>.</p>`,
);

//Funções com mais de um retorno
const number = 4;

function parImpar(number){
    if (number % 2 == 0) {
        return "par";
    }else{
        return "impar";
    }
}

document.writeln(`<p>O número ${number} é <strong> ${parImpar(number)}</strong>!`);