// Vetores no JavaScript

let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

let aluno = "Matheus";

document.writeln(
  `O tipo da variável que recebe um vetor no Javacript é:<strong> ${typeof produtos}</strong>`,
);

document.writeln(
  `<br><br>O tipo da vriável aluno é: <strong> ${typeof aluno}</strong>`,
);

document.writeln("<br>Exibindo os itens de vetor pleo índice: <br>");

// document.writeln(`<p>${produtos}`);

document.writeln(`<p>${produtos[0]}</p>`);
document.writeln(`<p>${produtos[1]}</p>`);
document.writeln(`<p>${produtos[2]}</p>`);
document.writeln(`<p>${produtos[3]}</p>`);

document.writeln(
  "<br>Exibindo os itens do vetor através do <strong> forEach: </strong>",
);

produtos.forEach((produto) => {
  //Para cada "produto" da lista de "produtos", faça tal...
  document.writeln(`<p> ${produto} </p>`);
});

document.writeln("<br>Exibindo os itens do vetor e os índices com o forEach: ");
produtos.forEach((produto, indice) => {
  document.writeln(`<p>  ${indice + 1} - ${produto}</p>`);
});
