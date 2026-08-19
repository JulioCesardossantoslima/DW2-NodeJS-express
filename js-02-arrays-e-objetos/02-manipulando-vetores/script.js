let frutas = ["Laranja", "Maçã", "Banana"];

document.writeln(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";

document.writeln(`<p> Agora a lista é: ${frutas}</p>`);

//Metodo push: Insee um novo elemento no FINAL
frutas.push("Abacaxi");

document.writeln(`<p>Agora a lista é: ${frutas}</p>`);

//Metodo unshift: insere um novo elemento no INICIO

frutas.unshift("Pera");

document.writeln(`<p>Agora a lista é: ${frutas}</p>`);

//Metodo Length: Retorna o número de elementos no vetor

document.writeln(`Na nossa lista temos ${frutas.length} frutas.`);

//Metodo Sort: ordena os itens do vetor

document.writeln(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdernadas = frutas.sort();

document.writeln(`<p>O primeiro item da lista é ${frutasOrdernadas[0]}</p>`);

document.writeln(`<p>Lista de frutas ordenadas: ${frutasOrdernadas}</p>`);

//Metodo Sort: ordenando em ordem Crescente e Decrescente

let numeros = [6, 8, 2, 9, 3, 800, 200];

document.writeln(`<p></p>Os números são: ${numeros}`);

document.writeln(
  `<p>Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`,
);

document.writeln(
  `<p>Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`,
);
